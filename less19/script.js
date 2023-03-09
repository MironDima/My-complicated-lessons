const input = document.getElementById('text')
const paragraph = document.getElementById('paragraph')

const debounce = (func, time) => {

	let timeout

	return () => {
		clearInterval(timeout)
		timeout = setTimeout(func, time)
	}
}

const logger = () => {
	 paragraph.textContent = input.value
	input.value = ''
	return
}

input.addEventListener('input',debounce(logger, 300))
