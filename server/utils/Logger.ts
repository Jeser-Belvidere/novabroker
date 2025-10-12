
export function log(level: 'info' | 'warn' | 'error', message: string, error?: Error | unknown): void {
    const messageLog = `${new Date(Date.now()).toISOString()} --> ${message} ${error ? `--> ErrorLog: ${error}` : ''}`
    if (level === 'info') console.info(messageLog)
    if (level === 'warn') console.warn(messageLog)
    if (level === 'error') console.error(messageLog)
}