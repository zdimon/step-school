(function( $ ) {
    $.fn.quizPlugin = function() {
    
       console.log('Myplugin')

       var app = {};

       app.start = function() {
           console.log('Start app');
       }
          
       return app;

    };
})(jQuery);