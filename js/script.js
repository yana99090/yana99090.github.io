// =========================================================
// Yana Patel — Portfolio
// 1. Project filter (All / Web / AI-ML / Data)
// 2. Stepwell levels in the hero also filter the projects
// 3. Footer year
// =========================================================

(function () {
	const projects = [...document.querySelectorAll('[data-cat]')];
	const buttons = [...document.querySelectorAll('[data-filter]')];
	const status = document.getElementById('filter-status');
	const names = { all: 'All', web: 'Web', ai: 'AI / ML', data: 'Data' };

	// Show only the projects in the chosen category
	function setFilter(category) {
		let shown = 0;

		buttons.forEach(button => {
			button.setAttribute('aria-pressed', String(button.dataset.filter === category));
		});

		projects.forEach(project => {
			const visible = category === 'all' || project.dataset.cat === category;
			project.hidden = !visible;
			if (visible) shown++;
		});

		// Read out by screen readers, so the stepwell links say what they did
		status.textContent = `${names[category]}: showing ${shown} project${shown === 1 ? '' : 's'}`;
	}

	// Put the number of projects next to each filter button
	buttons.forEach(button => {
		const category = button.dataset.filter;
		const count = category === 'all'
			? projects.length
			: projects.filter(project => project.dataset.cat === category).length;

		button.querySelector('span').textContent = count;
		button.addEventListener('click', () => setFilter(category));
	});

	// Tapping a level of the stepwell filters the work; the link then scrolls down to it
	document.querySelectorAll('[data-dig]').forEach(link => {
		link.addEventListener('click', () => setFilter(link.dataset.dig));
	});

	document.getElementById('year').textContent = new Date().getFullYear();
})();
