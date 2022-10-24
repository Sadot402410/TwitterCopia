const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

	function focusInputs(){
		const $container_inputs = d.querySelectorAll('.container-input-email');

		$container_inputs.forEach( (el) => {
			el.querySelector('.input-login').addEventListener('focus', (e) => {
				el.style.borderColor = 'rgb(29, 161, 242)';
				el.querySelector('label').style.color = 'rgb(29, 161, 242)';
			})

			el.querySelector('.input-login').addEventListener('blur', (e) => {
				el.style.borderColor = 'rgb(118, 118, 118)';
				el.querySelector('label').style.color = '#000';
			})
		})
	}
	focusInputs();
})