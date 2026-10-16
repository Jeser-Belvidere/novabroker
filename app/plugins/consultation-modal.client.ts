import { createApp } from 'vue'
import ConsultationModal from '~/components/ConsultationModal.vue'

const SHOW_DELAY_MS = 10_000

export default defineNuxtPlugin(() => {
	let isShown = false

	function showModal(): void {
		if (isShown) {
			return
		}
		isShown = true
		stopTriggers()

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
