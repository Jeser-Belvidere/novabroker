import { createApp } from 'vue'
import ConsultationModal from '~/components/ConsultationModal.vue'

const SHOW_DELAY_MS = 20_000
const STORAGE_KEY = 'consultation-modal-shown'

/* localStorage может быть недоступен в приватном режиме браузера */
function hasBeenShown(): boolean {
	try {
		return window.localStorage.getItem(STORAGE_KEY) === '1'
	} catch {
		return false
	}
}

function markAsShown(): void {
	try {
		window.localStorage.setItem(STORAGE_KEY, '1')
	} catch {
		// без сохранения окно просто покажется повторно
	}
}

export default defineNuxtPlugin(() => {
	// окно показывается один раз для посетителя, а не на каждый заход на сайт
	if (hasBeenShown()) {
		return
	}

	let isShown = false

	function showModal(): void {
		if (isShown) {
			return
		}
		isShown = true
		stopTriggers()
		markAsShown()

		const container = document.createElement('div')
		container.id = 'consultation-modal-root'
		document.body.appendChild(container)
		createApp(ConsultationModal).mount(container)
	}

	function onScroll(): void {
		// не показываем окно, пока страницу ещё закрывает загрузчик
		if (document.getElementById('loader')) {
			return
		}

		const documentElement = document.documentElement
		const pageMiddle = documentElement.scrollHeight / 2
		const viewportCenter = window.scrollY + window.innerHeight / 2

		if (viewportCenter >= pageMiddle) {
			showModal()
		}
	}

	function stopTriggers(): void {
		window.clearTimeout(showTimer)
		window.removeEventListener('scroll', onScroll)
	}

	const showTimer: number = window.setTimeout(showModal, SHOW_DELAY_MS)
	window.addEventListener('scroll', onScroll, { passive: true })
})
