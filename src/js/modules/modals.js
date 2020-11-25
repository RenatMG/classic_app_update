const modals = () => {

	function showModal(modal) {
		if (modal) {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			// document.body.classList.add('modal-open');
		}
	}

	function closeModal(modal) {
		if (modal) {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			// document.body.classList.remove('modal-open');
		}
	}

	function bindModal(triggerSelector, modalSelector, closeSelector) {

		const triggers = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);

		// trigger - is element, which will open modal
		triggers.forEach((trigger) => {
			trigger.addEventListener('click', (evt) => {
				if (evt.target) {
					evt.preventDefault();
				}
				showModal(modal);
			});
		});

		close.addEventListener('click', () => {
			closeModal(modal);
		});

		modal.addEventListener('click', (evt) => {
			if (evt.target === modal) {
				closeModal(modal);
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			showModal(document.querySelector(selector))
		}, time)
	}

	bindModal('[data-link="engineer-open"]', '[data-modal="popup"]', '[data-btn="popup-close"]');
	bindModal('[data-btn="engineer-open"]', '[data-modal="engineer"]', '[data-btn="engineer-close"]');
	showModalByTime('[data-modal="popup"]', 3000);
};

export default modals;