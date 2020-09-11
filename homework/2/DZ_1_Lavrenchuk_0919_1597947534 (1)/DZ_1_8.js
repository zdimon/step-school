/*
	8. Пользователь вводит сумму денег в кошельке и цену одной
	шоколадки. Программа выводит сколько шоколадок может
	купить пользователь и сколько сдачи у него останется.
*/

var Money = prompt("Enter money");
var BarPrice = prompt("Enter bar price");

alert(`${Math.floor(Money / BarPrice)} bars and ${Money % BarPrice} change`);