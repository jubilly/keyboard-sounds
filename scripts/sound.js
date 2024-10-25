function handlePlay() {
	const key = this.classList[1];

	const file = document.querySelector(`#som_${key}`);
	if (!file) {
		console.error('Elemento não encontrado.');
		return;
	};

	const extension = file.localName;
	if (extension !== 'audio') {
		console.error('Esse arquivo não é um audio.');
		return;
	}

	file.play();
}

function addAtiva(event) {
	const code = event.code;
	if (code.toLowerCase() === "enter") {
		this.classList.add('ativa');
	}
}

function removeAtiva(event) {
	const code = event.code;
	if (code.toLowerCase() === "enter") {
		this.classList.remove('ativa');
	}
}

function handleKeyboard() {
	const keys = document.querySelectorAll('.teclado .tecla');
	keys.forEach(key => {
		key.addEventListener('click', handlePlay);
		key.addEventListener('keydown', addAtiva);
		key.addEventListener('keyup', removeAtiva);
	});
}

document.addEventListener('DOMContentLoaded', handleKeyboard);