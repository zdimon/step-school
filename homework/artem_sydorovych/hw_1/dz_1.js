/*
1. Запросите у пользователя его имя и выведите в ответ:
«Привет, его имя!».
2. Запросите у пользователя год его рождения, посчитайте,
сколько ему лет и выведите результат. Текущий год укажите
в коде как константу.
3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
4. Запросите у пользователя радиус окружности и выведите
площадь такой окружности.
5. Запросите у пользователя расстояние в км между двумя
городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
успеть вовремя.
6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
константе.
7. Пользователь указывает объем флешки в Гб. Программа
должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
8. Пользователь вводит сумму денег в кошельке и цену одной
шоколадки. Программа выводит сколько шоколадок может
купить пользователь и сколько сдачи у него останется.
9. Запросите у пользователя трехзначное число и выведите
его задом наперед. Для решения задачи вам понадобится
оператор % (остаток от деления).
10. Запросите у пользователя целое число и выведите в ответ,
четное число или нет. В задании используйте логические
операторы. В задании не надо использовать if или switch.

*/


/**************************************************************/
var name = prompt("Ваше имя: ");

alert("Привет, " + name);


/**************************************************************/
const curent_year = 2020;

var year = prompt("Ваше год рождения: ");

alert(curent_year - year);


/**************************************************************/
var side = prompt("Сторона квадрата: ");

alert(side * 4);

/**************************************************************/
var radius = prompt("Радиус: ");

alert(Math.pow(radius,2) * 3.1415);


/**************************************************************/
var distance = prompt("Растояние в км: ");

var time = prompt("Время в ч: ");

alert("Скорость: " + distance/time + "км/ч");


/**************************************************************/
const course = 0.85;
var dolars = prompt("Доллары: ");

alert("Евро: " + dolars * course);

/**************************************************************/
const gb_mb = 1024;
var gb = prompt("Сколько гб флешка: ");

alert("Кол-во файлов: " + parseInt((gb_mb * gb) / 840));