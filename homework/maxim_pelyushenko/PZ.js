var id;
var name;
var phone;
var sum;
var isPaid;

var Base =
	[
			'id',
			'name',
			'phone',
			'sum',
			'isPaid',
	];



Base.forEach(element => 
{
    $('#table').append($(`<li>${element.name}</li>`));
});


