//Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = 'en'
//a) через if
if(lang === "ru") {
	console.log('Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота');
}
else if( lang === 'en') {
	console.log('Sunday','Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ');

}
else{
	console.log('Не верно')
}

// b) через switch-case

switch(true) {
	case lang === "ru":
		console.log('Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота');
		break;
		case lang === "en":
			console.log('Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота');
			break;	
			default:
				console.log('Не верно')
}
// c) через многомерный массив 
