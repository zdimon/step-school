/*
	5. Запросите у пользователя расстояние в км между двумя
	городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
	успеть вовремя.
*/

var distanse = prompt("Enter distanse( km )");
var time 	 = prompt("Enter time( h )");
alert(`Minimal velocity: ${ distanse / time }( km / h )`);