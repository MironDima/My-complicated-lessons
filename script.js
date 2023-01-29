// //Создать переменную num со значением 266219 (тип данных число)
// const num = 266219;
// //Вывести в консоль произведение (умножение) цифр этого числа
// let number =(2*6*6*2*1*9).valueOf()   
// console.log(number) //1296
// //Полученный результат возвести в степень 3
//  number = number **3  //2176782336
//  console.log(number)  
//  //Вывести в консоль первые 2 цифры полученного числа
//  const twoNum = number.toString().slice(0,2)  
//  console.log(twoNum)  //21  

//Создать переменную num со значением 266219 (тип данных число)
const num = 266219;
let str = num.toString();

console.log(typeof str);
let numbers = str.split('')
//Вывести в консоль произведение (умножение) цифр этого числа

const multyply = numbers.reduce((mult,index) => {
	return mult * index;
})
console.log(multyply);

//Полученный результат возвести в степень 3
 const level = multyply **3
  console.log(level);

//Вывести в консоль первые 2 цифры полученного числа
const twoNum = level.toString().slice(0,2)
console.log(twoNum);