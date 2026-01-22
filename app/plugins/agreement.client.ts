export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('page:finish', () => {
		window.addEventListener(
			'showAgreement',
			() => {
				const agreement = document.getElementById('agreement');
				if (agreement) {
					agreement.classList.add('show');
				}
			},
			{ once: true }
		);
	});
});
