/*
	6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
	константе.
*/

const OneDollar_InEuro = 0.84 // Aug 20, 17:41 UTC
// Data provided by Morningstar for Currency and Coinbase for Cryptocurrency

var dollars = prompt("Enter dollars");
alert(`In euro: ${ dollars * OneDollar_InEuro }`);