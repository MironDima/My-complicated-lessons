//Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = 'en'

// c) через многомерный массив 

let language ={ 
	'ru':['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
 	'en':['Sunday','Monday ','Tuesday ','Wednesday ','Thursday ','Friday ','Saturday ']
	}
	console.log(language['en']);


//a) через if
if(lang === "ru") {
	console.log(language['ru']);
}
if( lang === 'en') {
	console.log(language['en']);
}
else{
	console.log('Не верно')
}

// b) через switch-case

switch(true) {
	case lang === "ru":
		console.log(language['ru']);
		break;
		case lang === "en":
			console.log(language['en']);
			
			break;	
			default:
				console.log('Не верно')
}

	
//Решить задачу с помощью нескольких тернарных операторов

let namePerson = 'Александр'

 namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') :   console.log('cтудент')
 

 