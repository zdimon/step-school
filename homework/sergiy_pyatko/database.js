var DataBase = [
    'id',
    'name',
    'phone',
    'sum',
    'isPaid'
];
////////////////////////////////////////
var id;
var name;
var phone;
var sum;
var isPaid;

function getInfo() 
{
    $('addUser').click(function(){
        $(this).parents(".pane").animate({ opacity: "hide" }, "slow");
    });
}

DataBase.forEach(element => {
    $('#table').append($(`<li>${element.name}</li>`));
})

