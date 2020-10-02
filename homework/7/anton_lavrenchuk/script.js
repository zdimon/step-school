/*
$("#go").click(function(){
    $("#block").animate({ 
        width: "70%",         // ширина станет 70%
        opacity: 0.4,         // прозрачность будет 40%
        marginLeft: "0.6in",  // отступ от левого края элемента станет равным 6 дюймам
        fontSize: "3em",      // размер шрифта увеличится в 3 раза
        borderWidth: "10px"   // толщина рамки станет 10 пикселей
    }, 1500);               // анимация будет происходить 1,5 секунды
    });
*/

var app = {

    field : [],

    //active_cell,

    init_fields : function()
    {
        for ( let i = 0; i < 8; i++ ) 
        {
            this.field[i] = new Array(8);

            for ( let j = 0; j < 8; j++ ) 
            {
                this.field[i][j] = $('<div></div>');
                this.field[i][j].on( 'click', function(){});
                this.field[i][j].css( "width", "50px" );
                this.field[i][j].css( "height",  "50px" );
                this.field[i][j].css( "position", "absolute" );
                this.field[i][j].css( "top", `${i * 50}px` );
                this.field[i][j].css( "left", `${j * 50}px` );

                if( i % 2 == j % 2 )
                {
                    this.field[i][j].css( "background-color", "#ebebd0" ); // white
                }
                else
                {
                    this.field[i][j].css( "background-color", "#779455" ); // black
                }
                $("#deck").append( this.field[i][j] );
            }
        }
    },

    set_figure : function( el, figure, color )
    {
        var bcPos = {
            x: -13,
            y: -13
        };

        switch ( figure.toUpperCase() )
        {
            case "KING":
            {
                break;
            }
            case "QUEEN":
            {
                bcPos.x = -101;
                break;
            }
            case "BISHOP":
            {
                bcPos.x = -280;
                break;
            }
            case "KNIGHT":
                {
                bcPos.x = -370;
                break;
            }
            case "ROOK":
            {
                bcPos.x = -192;
                break;
            }
            case "PAWN":
            {
                bcPos.x = -458;
                break;
            }
            default:
            {
                break;
            }
        }
        
        if ( color.toUpperCase() == 'WHITE' )
        {
            bcPos.y = -89;
        }

        el.css( "background-image", "url('all.png')" );
        el.css( "background-position", `${bcPos.x}px ${bcPos.y}px` );
    },

    default_figure_state : function()
    {
        this.set_figure( this.field[0][4], 'king',      'black' );
        this.set_figure( this.field[0][3], 'queen',     'black' );
        this.set_figure( this.field[0][2], 'bishop',    'black' );
        this.set_figure( this.field[0][5], 'bishop',    'black' );
        this.set_figure( this.field[0][1], 'knight',    'black' );
        this.set_figure( this.field[0][6], 'knight',    'black' );
        this.set_figure( this.field[0][0], 'rook',      'black' );
        this.set_figure( this.field[0][7], 'rook',      'black' );

        this.set_figure( this.field[7][3], 'king',      'white' );
        this.set_figure( this.field[7][4], 'queen',     'white' );
        this.set_figure( this.field[7][2], 'bishop',    'white' );
        this.set_figure( this.field[7][5], 'bishop',    'white' );
        this.set_figure( this.field[7][1], 'knight',    'white' );
        this.set_figure( this.field[7][6], 'knight',    'white' );
        this.set_figure( this.field[7][0], 'rook',      'white' );
        this.set_figure( this.field[7][7], 'rook',      'white' );

        for ( let i = 0; i < 8; i++ ) 
        {
            this.set_figure( this.field[1][i], 'pawn', 'black' );
            this.set_figure( this.field[6][i], 'pawn', 'white' );
        }
    },

    init : function()
    {
        this.init_fields();
        this.default_figure_state();
    }
}

app.init();
console.log( app.field );