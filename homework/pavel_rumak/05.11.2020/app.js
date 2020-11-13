var loginU = "pavel";
var passwordU = "1234";

var user = false;

const check = function()
{
    var login = $('#login').val();
    var password = $('#password').val();
    
    if(loginU == login && passwordU == password)
    {
        user = true;
        document.cookie = "true";
        console.log(user);
    }
    else
    {
        console.log(user);
    }

}

$("#button").on("click",check);

const cookieRight = function()
{
    //console.log($.cookie('cookie_name'));
    if($.cookie('cookie_name') == 'true')
    {
        $('#login').hide();
        $('#password').hide();
        $('#button').hide();
    }
    

    //console.log($.cookie('cookie_name'));
}
$("#button").on("load",cookieRight);

