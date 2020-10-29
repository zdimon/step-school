(function( $ ) {
    $.fn.quizPlugin = function() {
    
       console.log('Myplugin')

       var app = {};

       app.serverUrl = 'localhost:7777';

       app.start = function() {
           console.log('Start app');

            if(sessionStorage.getItem('username')) {
                this.initRoom();
                this.wsConnect();
            } else {
                this.loginForm();
                this.getStickers();
            }

       }

       app.getCurrenQuestion = function() {
        $.get(`http://${this.serverUrl}/v1/quiz/get_current_question`,(data) => {
            console.log(data);
            $('#currentQuestion').append(data.question+data.answers);
           
       })
       }

       app.initRoom = function() {
        console.log('initRoom');
        $('#sendButton').on('click', () => {this.sendMessage()});
        this.getCurrenQuestion();
       };

       app.addMessage = function(message) {
           let tpl = `
           <div class="chat">
              <div class="chat-user">
                 <a class="avatar m-0">
                 ${message.is_right}
                 </a>
                 <span class="chat-time mt-1">6:45</span>
              </div>
              <div class="chat-detail">
                 <div class="chat-message">
                    <p>${message.text}</p>
                 </div>
              </div>
           </div>`;
           $('#chatBox').append(tpl);
       }

       app.wsConnect = function() {

        var webSocket = new WebSocket('ws://localhost:7777/quiz/');

        webSocket.onmessage = (event) => {
            var message = JSON.parse(event.data)
            console.log(message);
            this.addMessage(message.message);
        }

        webSocket.onclose =  (event) => {
            console.log('Close connection');
            
        };

        webSocket.onopen =  (event) => {
            console.log('Connection established');
        };


       }

       app.sendMessage = function() {
           let data = {
               playername: sessionStorage.getItem('username'),
               message: $('#myMessage').val()
           };
           $.post(
           `http://${this.serverUrl}/v1/quiz/save_message`,
           data,
           (rez) => {
               console.log(rez);
           })
       }

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


          
       return app;

    };
})(jQuery);