(function( $ ) {
    $.fn.quizPlugin = function() {
    
       console.log('Myplugin')

       var app = {};

       app.serverUrl = 'localhost:7777';

       app.start = function() {
           console.log('Start app');

            if(sessionStorage.getItem('username')) {
                this.initRoom();
            } else {
                this.loginForm();
                this.getStickers();
            }

       }

       app.initRoom = function() {
        console.log('initRoom');
       };

       app.getStickers = function() {
           $.get(`http://${this.serverUrl}/v1/quiz/sticker/list`,(data) => {
                console.log(data);
                data.forEach((el) => {
                    let tpl = `<img width="50" src="${el.get_url}" />`
                    $('#Stickers').append(tpl);
                });
           })
       }

       app.loginForm = function() {
        console.log('loginForm');
        let tpl = `<div class="tab-pane fade active show" id="default-block" role="tabpanel">
            <div class="chat-start">
            <input id="userName" type="text" />
            <div id="Stickers"></div>
            <button id="chat-start" class="btn bg-white mt-3">Start
            Conversation!</button>
            </div>
        </div>`;
        $('#loginForm').append(tpl);
        console.log($('#loginForm').find('#chat-start'));
        console.log(this.doLogin);
        $('#loginForm').find('#chat-start').on('click', this.doLogin)
       }

       app.doLogin = function() {
 
           sessionStorage.setItem('username',$('#userName').val())
       }

       $('#sendButton').on('click', function(){
            var date = new Date();

           let msg = $('#message').val();
           console.log(msg);
           let msg_chat = `<div class="chat">
           <div class="chat-user">
              <a class="avatar m-0">
              <img src="images/user/1.jpg" alt="avatar" class="avatar-35 ">
              </a>
              <span class="chat-time mt-1">${date.getHours()}:${date.getMinutes()}</span>
           </div>
           <div class="chat-detail">
              <div class="chat-message">
                 <p>${msg}</p>
              </div>
           </div>
        </div>`;
           document.getElementById('chat-content').innerHTML += msg_chat;
       })
          
       return app;

    };
})(jQuery);