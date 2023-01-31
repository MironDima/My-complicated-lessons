
function myFunc(text) {

	if(typeof text != 'string'){
	console.log('Аргумент не строка!')
	}
	else{
	console.log('Аргумент строка');
	
		}

	text = text.trim()


	return text.length > 30 ? text.slice(0,30) + '...' : text;
	
	
	
}
console.log(myFunc('     qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghпреререререр  '))



