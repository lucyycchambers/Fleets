document.addEventListener('DOMContentLoaded', () => {
	const body = document.body;
	const nav = document.getElementById('nav');

	// Disable animations until page loads
	body.classList.add('is-loading');
	window.addEventListener('load', () => {
		setTimeout(() => {
			body.classList.remove('is-loading');
		}, 100);
	});

	// Create and append nav panel for small screens
	const navPanel = document.createElement('div');
	navPanel.id = 'navPanel';
	navPanel.innerHTML = `
		${nav.innerHTML}
		<a href="#" class="close">&times;</a>
	`;
	document.body.appendChild(navPanel);

	const toggleBtn = document.querySelector('.navPanelToggle');
	const closeBtn = navPanel.querySelector('.close');

	toggleBtn.addEventListener('click', (e) => {
		e.preventDefault();
		navPanel.classList.toggle('visible');
	});

	closeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		navPanel.classList.remove('visible');
	});

	// Optional: click outside to close
	document.addEventListener('click', (e) => {
		if (!navPanel.contains(e.target) && !toggleBtn.contains(e.target)) {
			navPanel.classList.remove('visible');
		}
	});
});
