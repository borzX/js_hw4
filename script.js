/* +++ Задание 1 +++ */

let num1 = +prompt(`Введите значение num1 (< или = 1):`)
let num2 = +prompt(`Введите значение num2 (> или = 3):`)

if (num1>=2 & num2>=3) {
  console.log(`num1 задан неверно`)
} else if (num1<=1 & num2<=2) {
  console.log(`num2 задан неверно`)
}
else if (num1>=2 & num2<=2) {
  console.log(`num1 и num2 заданы неверно`)
}
else if (num1<=1 & num2>=3) {
  console.log(`Вы ввели правильные значения`)
}


console.log(` \n `)


/* +++ Задание 2 +++ */

let test = true;

let result = ((test === true) ? console.log('+++') : console.log('---'))


/* +++ Задание 3 +++ */

let day = getRandomInt()

console.log(day)
if (day>=1 & day<=10){
  console.log(`первая декада`)
}
else if (day>=11 & day<=20){
  console.log(`вторая декада`)
} else {console.log(`третья декада`)}


function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(32);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}
