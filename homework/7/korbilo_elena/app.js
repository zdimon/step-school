$.getJSON('periodic_Table.json', function(data) {

    function color(color){
        if(color = 'diatomic nonmetal')
            return '#98FB98';
    }

    data.elements.forEach((element,idx) => {
        $('#table').append($(`<div class="box${idx}" id="box${idx}">${element.number}<br>${element.symbol}</div>`));
                
        var div = document.getElementById(`box${idx}`);
        div.style.cssText = `grid-row: ${element.ypos}; grid-column: ${element.xpos};`;
    });
});
