if($.cookie('cookie')) {
    $('#form').css("display", "none");
    $('#Unlogin').css("display", "inline")
 
}

$('#button').on('click', function(){

    let login = $('#login').val();
    console.log(login);

    let password = $('#password').val();
    console.log(password);

    if( login == 'Elena' && password == 'qwerty' ){
        $.cookie('cookie', "AllRight");
        location.reload();
    }
})

$('#quit').on('click', function(){
    $.cookie('cookie', null);
    location.reload();
})