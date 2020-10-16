/***************************************************/
//1
var start_diapozon = Number(prompt('start_diapozon'));
var end_diapozon = Number(prompt('end_diapozon'));
var pointer=0;

while(start_diapozon < end_diapozon-1)
{
    start_diapozon++;
    pointer+=start_diapozon;
}
alert(pointer);


/***************************************************/
//2
var chislo = Number(prompt('chislo'));
var chislo3 = Number(prompt('chislo2'));
var i = 0;
var j = 0;
while(i<chislo)
{
    i++;
    var t = chislo / i;
    if(chislo % i==0)
    {
        console.log(t);
    }    
}
while(j<chislo3)
{
    j++;
    var t2 = chislo3 / j;
    if(chislo3 % j==0)
    {
        console.log(t2);
    }    
}
/*if(t==t2)
{
   console.log(this);
}
*/

/***************************************************/
//3
var chislo = prompt('chislo');
var i = 0;
while(i<chislo)
{
    i++;
    var t = chislo / i;
    if(chislo % i==0)
    {
        console.log(t);
    }    
}

/***************************************************/
//4
var chislo_dlina = prompt('chislo_dlina');
console.log(chislo_dlina.length);


/***************************************************/
//5
for(var i = 0;  i < 10; i++){
    var chislo_dlina = prompt('chislo_dlina');
    
    switch (chislo_dlina) {
        case chislo_dlina > 0:
            for(var j = 0; j < chislo_dlina; j++)
            {
                console.log(j);
            }
            break;
        case chislo_dlina < 0:
            for(var h = 0; h < chislo_dlina; h++)
            {
                console.log(h);
            }
            break;
        case chislo_dlina = 0:
            for(var g = 0; g < chislo_dlina; g++)
            {
                console.log(g);
            }
            break;            
        default:
            break;
    }
    console.log(chislo_dlina);
}

/***************************************************/
//6
var res;
var otvet;
var yes, no;

do
{
    var chislo_1 = prompt('chislo');
    var chislo_2 = prompt('chislo2');
    var znak = prompt('znak');
    switch (znak) {
        case '-':
            res = chislo_1 - chislo_2        
            break;
        case '/':
            res = chislo_1 / chislo_2        
            break;
        case '*':
            res = chislo_1 * chislo_2        
            break;
        case '+':
            res = Number(chislo_1) + Number(chislo_2)        
            break;
        default:
            break;
    }
    alert(res);
    otvet = prompt('')
}
while (otvet=='yes'){}

/***************************************************/
//8
var otvet2;
do {
    var Monday = prompt('Monday: Хотите увидеть следуйщий день?');
    var Tuesday = prompt('Tuesday: Хотите увидеть следуйщий день?');
    var Wednesday = prompt('Wednesday: Хотите увидеть следуйщий день?');
    var Thursday = prompt('Thursday: Хотите увидеть следуйщий день?');
    var Friday = prompt('Friday: Хотите увидеть следуйщий день?');
    var Saturday = prompt('Saturday: Хотите увидеть следуйщий день?');
    var Monday = prompt('Sunday: Хотите увидеть следуйщий день?');
} while (otvet2);