/***************************************************/
var name = prompt ('What is your name?');
alert('Your name is ' + name);

/***************************************************/
var year = prompt ('What is year of your birth?');
const our_year = 2020;
var his_year = our_year-year;
alert('You are ' + his_year);

/***************************************************/
var dlina = prompt ('What dlina kvadrata?');
var perimetr = dlina * 4;
alert('Perimetr ' + perimetr);

/***************************************************/
var Radius_kruga = prompt ('What radius kruga?');
const Pi = 3.14;
var Ploshad = Pi * Math.pow(Radius_kruga, 2);
alert('S_kruga ' + Ploshad);

/***************************************************/
var S = prompt ('What S?');
var t = prompt ('What t?');
var V = S/t;
alert('Speed ' + V);

/***************************************************/
const Dollar = 27.3;
const Evro = 32;
var Dollar_V_Grivni = prompt ('How many dollars?');
var Grivni = Dollar_V_Grivni * Dollar;
var Grivni_V_Evro = Grivni/Evro;
alert('Evro ' + Grivni_V_Evro);

/***************************************************/
const Gb_V_MB = 1024;
var Gb = prompt ('How many Gb?');
var MB = Gb*Gb_V_MB;
var res=MB/820;
alert('How many files ' + res);

/***************************************************/
var Money = prompt ('How many money?');
var Price = prompt ('Price?');
var res2 = Money%Price;
alert('Ostatok ' + res2);


