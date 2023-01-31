//Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = 'en'

// c) через многомерный массив 

let language =[
	['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
 	['Sunday','Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ']
]
	console.log(language[0]);


//a) через if
if(lang === "ru") {
	console.log(language[0]);
}
if( lang === 'en') {
	console.log(language[1]);
}
else{
	console.log('Не верно')
}

// b) через switch-case

switch(true) {
	case lang === "ru":
		console.log(language[0]);
		break;
		case lang === "en":
			console.log(language[1]);
			
			break;	
			default:
				console.log('Не верно')
}

	
//Решить задачу с помощью нескольких тернарных операторов

let namePerson = 'Александр'

 namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') :   console.log('cтудент')
 

 