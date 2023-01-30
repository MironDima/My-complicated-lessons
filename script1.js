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
			console.log('Sunday','Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ');
			break;	
			default:
				console.log('Не верно')
}
// c) через многомерный массив 

let language ={ 
	'ru':['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
 	'en':['Sunday','Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ']
	}
	console.log(language.en);
	
//Решить задачу с помощью нескольких тернарных операторов

let namePerson = 'Александр'

 namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') :   console.log('cтудент')
 

 