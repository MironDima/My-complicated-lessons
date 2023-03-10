const startBtn = document.getElementById('btnStart')
const resetBtn = document.getElementById('btnReset')
const circle = document.querySelector('.circle')

let idInterval
let count = 0
let pause = false

const animationFunc = () => {
	count++
	idInterval = requestAnimationFrame(animationFunc)
	if (count < 220) {
		circle.style.top = count * 2 + 'px'
	}
	else {
		cancelAnimationFrame(idInterval)
	}
	console.log(idInterval);
}

const resetFunc = () => {
	count = 0
	circle.style.top = 0
	cancelAnimationFrame(idInterval)
	startBtn.innerHTML = 'Начать'
}

startBtn.addEventListener('click', () => {
	if (pause) {
		cancelAnimationFrame(idInterval)
		pause = false
		startBtn.innerHTML = 'Начать'

	}
	else {
		idInterval = requestAnimationFrame(animationFunc)
		pause = true
		startBtn.innerHTML = 'Пауза'
	}
})

resetBtn.addEventListener('click', resetFunc) 