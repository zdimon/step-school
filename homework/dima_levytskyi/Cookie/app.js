
const isTrue = function()
{
    if($.cookie('cookie') == "True")
    {
        $('#form').css("display", "none")

        $('#relogbtn').css("display", "inline")
    };
}

const func = function()
{
    let login = $('#log').val()
    console.log(login)

    let pass = $('#pass').val()
    console.log(pass)

    if( login == "Dima" && pass == "qwerty" )
    {
        $.cookie('cookie', 'True');
        location.reload()
    }
}

const Quitfunc = function()
{
    $.cookie('cookie', "False")
    $('#relogbtn').css("display", "none")

    location.reload()
}

$('#logbtn').on('click', func);
isTrue();
$('#relogbtn').on('click', Quitfunc);