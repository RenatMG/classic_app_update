const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector);
	const tabs = document.querySelectorAll(tabSelector);
	const contents = document.querySelectorAll(contentSelector);

	function hideTaBContent() {
		contents.forEach((content) => {
			content.style.display = 'none';
		})

		tabs.forEach((tab) => {
			tab.classList.remove(activeClass)
		})
	}

	function showTabContent(i = 0) {
		contents[i].style.display = 'block';
		tabs[i].classList.add(activeClass);
	}

	hideTaBContent();
	showTabContent();

	header.addEventListener('click', (evt) => {
		if (evt.target) {
			const target = evt.target;
			const className = tabSelector.replace(/\./, '');
			if (target.classList.contains(className) || target.parentNode.classList.contains(className)) {
				tabs.forEach((tab, i) => {
					if (target === tab || target.parentNode === tab) {
						hideTaBContent();
						showTabContent(i);
					}
				})
			}
		}
	})
};

export default tabs;