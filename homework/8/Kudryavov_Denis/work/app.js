(function( $ ) {
    $.fn.quizPlugin = function() {
    
       console.log('Myplugin')

       var app = {};

       app.start = function() {
           console.log('Start app');

            if(sessionStorage.getItem('username')) {
                this.initRoom();
            } else {
                this.loginForm()
            }

       }

       app.initRoom = function() {
        console.log('initRoom');
       };


       app.loginForm = function() {
        console.log('loginForm');
        let tpl = `<div class="tab-pane fade active show" id="default-block" role="tabpanel">
        <div class="chat-start">
           <input id = "foo" type="text" />
           <button id="chat-start" class="btn bg-white mt-3">Start
           Conversation!</button>
        </div>`;
        $('#my').append(tpl);
       }

        app.login = function()
        {
           console.log( $('#foo').val());
        }
        $('#hat-start').on('click', this.login);

       return app;

    };
})(jQuery);