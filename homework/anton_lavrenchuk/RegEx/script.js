var ip =    /(\d{1,3}\.){3}\d{1,3}/;

var phone = /\+\d{1,3}\(\d{3}\)\d{7}/;

var email = /(_)*([a-z])([a-z]|_|\.|\d)*(\@)([a-z])([a-z]|_|\.|\d)*(\.)([a-z])([a-z]|_|\.|\d)*/;

var IsBot = /Bot$/;

var check = function() {

    var inIp    = $('#ip')   .val();
    var inPhone = $('#phone').val();
    var inEmail = $('#email').val();

    if( ip.test( inIp ) && phone.test( inPhone ) && email.test( inEmail ) ) {
        
        $('#button').show();

        $( "#button" ).animate({
            opacity: 1
        }, 1000, function() {} );
    }
    else {

        $( "#button" ).animate({
            opacity: 0
        }, 1000, $('#button').hide );
    }
}

var updateName = function() {
    var inName = $('#infullname').val();

    var Res = inName.split(/\W+/);

    $("#name")      .text( Res[0] );
    $("#lastname")  .text( Res[1] );
}

$('#ip').   on( 'input', check );
$('#phone').on( 'input', check );
$('#email').on( 'input', check );

$('#infullname').on( 'input', updateName );