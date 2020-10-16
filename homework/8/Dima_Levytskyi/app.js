
var index = 0;

function cout(arr, i)
{
    $('#news').append($(`<h3>${arr[i].title}</h3> <img src = "${arr[i].img}" height = "200" width = "350"  <p>${arr[i].content}</p>`));
    
    var div = document.getElementById('news')
    div.style.cssText = `max-width: 700px`
    
}

function anim()
{
    $("#container").animate(
        {
            height: 'toggle'
        });
    
    $("#container").animate(
        {
            height: 'toggle'
        });
}

$.getJSON('News.json', function(data)
{
    var news = data; 
    
    console.log(news);

    cout(news, index);

    $('#next').on('click', function()
    {
        $('#news').empty();
        anim();
        if(index === 14)
        index = 0;
        else
        ++index;
        cout(news, index);
    });

    $('#prev').on('click', function()
    {
        $('#news').empty();
        anim();
        if(index === 0)
        index = 14;
        else
        --index;
        cout(news, index);
    });
});