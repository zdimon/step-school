var app = {
    init : function()
    {
        if( $.cookie( 'authorized' ) == 'true' ) {
            $("#registration").hide();
            $("#unregistr").show();
            this.bindUnregistrOnClick();
        }
        else { // is not authorized
            this. bindRegistrOnClick();
        }
    },

    bindRegistrOnClick : function () {
        $( "#registrationButton" ).on( "click", () => {
            if( this.isCorrectLogin() 
             && this.isCorrectPassword() )
            {
                var date = new Date();
                date.setTime( date.getTime() + ( 1000 * 60 ) );

                $.cookie( 'authorized', 'true', { expires : date } );
        
                window.location.reload();
            }
        } );
    },

    bindUnregistrOnClick : function () {
        $( "#unregistrButton" ).on( "click", () => {
            $.cookie( 'authorized', 'false' );
            window.location.reload();
        } );
    },

    isCorrectLogin : function() {
        return ( $( "#login").val() == "anton" );
    },

    isCorrectPassword : function() {
        return ( $( "#password").val() == "0511" );
    }
}

app.init();

