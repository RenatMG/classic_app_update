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

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		// closeClickOverlay = true закрывать модальное окно при клике на подложку

		const triggers = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);
		const popups = document.querySelectorAll('[data-modal]');
		console.log(popups);

		// trigger - is element, which will open modal
		triggers.forEach((trigger) => {
			trigger.addEventListener('click', (evt) => {
				if (evt.target) {
					evt.preventDefault();
				}

				popups.forEach((popup) => {
					closeModal(popup);
				});

				showModal(modal);
			});
		});

		close.addEventListener('click', () => {
			closeModal(modal);
			popups.forEach((popup) => {
				closeModal(popup);
			});
		});

		modal.addEventListener('click', (evt) => {
			if (evt.target === modal && closeClickOverlay) {
				closeModal(modal);
				popups.forEach((popup) => {
					closeModal(popup);
				});
			}
		})
	}

	function showModalByTime(selector, time = 60000) {
		setTimeout(() => {
			showModal(document.querySelector(selector))
		}, time)
	}

	bindModal('[data-link="engineer-open"]', '[data-modal="popup"]', '[data-btn="popup-close"]');
	bindModal('[data-btn="engineer-open"]', '[data-modal="engineer"]', '[data-btn="engineer-close"]');
	bindModal('[data-btn="calc-open"]', '[data-modal="calc"]', '[data-btn="calc-close"]');
	bindModal('[data-btn="calc_profile-open"]', '[data-modal="calc_profile"]', '[data-btn="calc_profile-close"]', false)
	bindModal('[data-btn="calc_end-open"]', '[data-modal="calc_end"]', '[data-btn="calc_end-close"]', false)

	// showModalByTime('[data-modal="popup"]');
};

export default modals;