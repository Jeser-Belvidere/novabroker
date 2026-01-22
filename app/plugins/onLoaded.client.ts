export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('page:finish', () => {
		const loadingElement = document.getElementById('loader');
		if (loadingElement) {
			loadingElement.classList.add('fade');
			setTimeout(() => {
				loadingElement.remove();
				window.dispatchEvent(new CustomEvent('showAgreement'));
			}, 500);
		}
	});
});
