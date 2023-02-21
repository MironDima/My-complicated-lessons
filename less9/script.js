const newTime = document.getElementById('newTime')

//'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
let date = new Date()

function formatDate(date){
	let year = date.getFullYear()
	let month = date.toLocaleDateString('ru-RU',{month: 'long'})
	let day = date.getDate()

	let weekday = date.toLocaleDateString('ru-RU',{weekday: 'long'})
	let minute = date.getMinutes()
	let second = date.getSeconds()
	let hour = date.getHours()
		function formateHour(hour){git
			if(hour >= 5 && hour <=20){
				return 'часов'
			}
			else if( hour >= 2 && hour <= 22){
				return 'часа'
			}
			else{
				return 'час'
			}
		}
	return `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hour} ${formateHour(hour)} ${minute} минут ${second} секунды `
}
formatDate(date)

//'04.02.2020 - 21:05:33'
// let date = new Date()

// 	function formatDate(date){
// 	let year = date.getFullYear()
// 	let month = (date.getMonth()+1).toString().padStart(2,'0')
// 	let day = date.getDate().toString().padStart(2,'0')

// 	let hour = date.getHours().toString().padStart(2,'0')
// 	let minute = date.getMinutes().toString().padStart(2,'0')
// 	let second = date.getSeconds().toString().padStart(2,'0')

// 	return `${day}.${month}.${year} - ${hour}:${minute}:${second}`
// }
console.log(formatDate(date));


setInterval(() => {
	newTime.innerHTML = formatDate(date)
},1000);

