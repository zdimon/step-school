/*
	9. Запросите у пользователя трехзначное число и выведите
	его задом наперед. Для решения задачи вам понадобится
	оператор % (остаток от деления).
*/

var num = prompt("Enter three-digit number");
alert(`${ num % 10 }${ Math.floor( num / 10 % 10 )}${ Math.floor( num / 100 )}`);