function draw(arr, i){
    $('#news').append($(`<h3>${arr[i].title}</h3><img src="${arr[i].img}" height="50%" width="50%"><p>${arr[i].content}</p>`));

    var div = document.getElementById(`news`);
    div.style.cssText = `max-width: 500px;`;    
}

function anim() {
    $("#container").animate({
        height: 'toggle'
    });
    $("#container").animate({
        height: 'toggle'
    });
}

$.getJSON('News.json', function(data) {
    var news = data;

    var index = 0;
    
    draw(news, index);

     $('#next').on('click', function() {
        $('#news').empty();
        anim();
        if(index === 14)
        index = 0;
        else
        index++;

         draw(news, index);
     })

    $('#prev').on('click', function() {
        
        $('#news').empty(); 
        anim();
        if(index === 0)
         index = 14;
         else
         index--;

         draw(news, index);
     })
});