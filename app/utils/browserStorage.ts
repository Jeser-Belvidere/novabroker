type BrowserStorageStorageType = Storage
type BrowserStorageReturnValueType<T> = T | undefined

interface BrowserStorageConstructorParamsType {
  storage?: 'sessionStorage' | 'localStorage'
}

interface BrowserStorageClassType {
  clear(): void
  get<T>(key: string): BrowserStorageReturnValueType<T>
  set(key: string, value: unknown): void
  remove(key: string): void
}

/**
 * Создаем fallback реализацию класса Storage.
 * Этот класс необходим, чтобы при вызове Storage на сервере не получать ошибку "Window is not defined"
 */
class NoopStorage implements BrowserStorageStorageType {
  /* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function -- отключаем правила только для этого класса, чтобы он соответствовал интерфейсу, но при этом был пустой*/
  public getItem(key: string) {
    return null
  }
  public setItem(key: string, value: string) {}
  public removeItem(key: string) {}
  public clear() {}
  public key(index: number) {
    return null
  }
  public length = 0
}

class BrowserStorage implements BrowserStorageClassType {
  private readonly storage: BrowserStorageStorageType

  public constructor({ storage }: BrowserStorageConstructorParamsType = {}) {
    if (typeof window !== 'undefined') {
      this.storage = storage === 'sessionStorage' ? sessionStorage : localStorage
    } else {
      // Если конструктор вызван на SSR стороне - проставляем fallback-реализацию
      this.storage = new NoopStorage()
    }
  }

  private getItem<T>(key: string): BrowserStorageReturnValueType<T> {
    try {
      const storageValue = this.storage.getItem(key)
      return storageValue ? (JSON.parse(storageValue) as T) : undefined
    } catch {
      return undefined
    }
  }

  public clear(): void {
    this.storage.clear()
  }

  public get<T = unknown>(key: string): T | undefined {
    return this.getItem<T>(key)
  }

  public set(key: string, value: unknown): void {
    this.storage.setItem(key, JSON.stringify(value))
  }

  public remove(key: string): void {
    this.storage.removeItem(key)
  }
}

export default new BrowserStorage()