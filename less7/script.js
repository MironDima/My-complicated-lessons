let week = ['Понедельник ', 'Вторник ', 'Среда ', 'Четверг ', 'Пятница ', 'Суббота ', 'Воскресенье ']
let result = document.getElementById('out_put')
const date = new Date();
const today = date.getDate() - 6


const dayWeek = function() {
for(let i = 0; i < week.length; i++) {

	if( i < 5 && i != +today){
		result.innerHTML +=  week[i] + '<br>'
		
	}
	if (i > 4) {
		result.innerHTML +=	'<i>' + week[i] + '</i>' + '<br>'
	}
	
	if(i === today) {
		result.innerHTML += '<b>'+ week[i] +'</b>' + '<br>'
	}
	console.log(today);
	
}
}

dayWeek()
