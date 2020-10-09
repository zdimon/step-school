$.getJSON('periodic_Table.json', function(data) {

    function color(color){
        if(color == "diatomic nonmetal" || color == "polyatomic nonmetal")
            return '#8bffa6';
        else if(color == "noble gas" || color == "unknown, predicted to be noble gas")
            return "#beffff";
        else if(color == "alkali metal")
            return "#ff5d57";
        else if(color == "alkaline earth metal")
            return "#ffdf9a";
        else if(color == "metalloid")
            return "#bfad67";
        else if(color == "post-transition metal" || color == "unknown, probably post-transition metal")
            return "#b09cc5";
        else if(color == "transition metal" || color == "unknown, probably transition metal" )
            return "#ff9ec5";
        else if(color == "halogen")
            return "#f5f266";
        else if(color == "lanthanide")
            return "#fcc1ed";
        else if(color == "actinide")
            return "#f8a1e4";
    }

    data.elements.forEach((element,idx) => {
        $('#table').append($(`<div class="box${idx}" id="box${idx}">${element.number}<br>${element.symbol}</div>`));
                
        var div = document.getElementById(`box${idx}`);
        div.style.cssText = `grid-row: ${element.ypos}; grid-column: ${element.xpos}; background-color: ${color(element.category)}; text-align: center; border: 1px solid black`;
    });
});
