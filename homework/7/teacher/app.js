$.get('table.json', function(data){
    data.elements.forEach(element => {
        $('#table').append($(`<li>${element.name}</li>`));
    });
})