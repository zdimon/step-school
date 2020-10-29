(function( $ )
{
    $.fn.quizPlugin = function()
    {
        console.log('Myplugin');

        var app = {};

        app.start = function()
        {
            console.log('Start');

            if(sessionStorage.getItem('username'))
            {
                this.initRoom();
            }
            else
            {
                this.loginForm()
            }
        }

        app.initRoom = function()
        {
            console.log('initRoom');
        }

        app.loginForm= function()
        {
            console.log('loginForm');

            let tpl = 

            $('#loginForm').append(tpl);
        }

        return app;
    }
})(jQuery);