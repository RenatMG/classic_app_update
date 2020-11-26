const forms = () => {
	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('form');
	const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
	const message = {
		loading: 'Loading...',
		success: 'Thank you',
		failure: 'Something went wrong',
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		const result = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await result.text();
	};

	const clearInputs = () => {
		inputs.forEach((input) => {
			input.value = '';
		})
	};

	phoneInputs.forEach((input) => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/\D/, '');
		})
	});

	forms.forEach((form) => {
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.appendChild(statusMessage);

			const formData = new FormData(form);
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				})

		})
	})
};
export default forms;