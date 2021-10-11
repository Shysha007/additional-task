const num = 5;
const userConf = confirm(`Хотите ли вы поиграть в игру?`);
let numQuestion;
if (userConf) {
   numQuestion = +prompt(`Угадайте число:`);
   if (!isNaN(numQuestion) && numQuestion === num) {
       alert(`Вы угадали`);
   } else if (isNaN(numQuestion)) {
       alert (`Вы ввели не число`);
   } else if (!isNaN(numQuestion) && numQuestion !== num) {
       alert(`Вы не угадали`);
   }
} else {
       alert(`Очень жаль`);
}