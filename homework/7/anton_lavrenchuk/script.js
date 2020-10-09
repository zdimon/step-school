var app = {

    field : [],
	
    active_cell : null,
	active_cell_color : null,

    init_fields : function()
    {
        for ( let i = 0; i < 8; i++ ) 
        {
            this.field[i] = new Array(8);

            for ( let j = 0; j < 8; j++ ) 
            {
                this.field[i][j] = $('<div></div>');
                this.field[i][j].on( 'click', () => {
					if( this.active_cell == null ){ // if NO figure active
						if( this.field[i][j].css('background-image') !== 'none') { // if cell is NOT empty
						
							this.active_cell = this.field[i][j];
							this.field[i][j].css( "background-color", "#ff0000" );
							
							if( i % 2 == j % 2 )
							{
								this.active_cell_color = "#ebebd0"; // white
							}
							else
							{
								this.active_cell_color = "#779455"; // black
							}
						}
					}
					else { // if active figue
						if( this.field[i][j].css('background-image') === 'none') { // if cell is empty
							this.active_cell.css( "background-image", "" );
							this.field[i][j].css( "background-image", "url('all.png')" );
							this.field[i][j].css( "background-position", this.active_cell.css('background-position') );
							this.active_cell.css( "background-color", this.active_cell_color );
							this.active_cell = null;
						}
						else // if cell is NOT empty
						{
							this.active_cell.css( "background-color", this.active_cell_color );
							if( i % 2 == j % 2 )
							{
								this.active_cell_color = "#ebebd0"; // white
							}
							else
							{
								this.active_cell_color = "#779455"; // black
							}
							this.active_cell = this.field[i][j]; // change active figure
							this.field[i][j].css( "background-color", "#ff0000" );
						}
					}
				});
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

        this.set_figure( this.field[7][4], 'king',      'white' );
        this.set_figure( this.field[7][3], 'queen',     'white' );
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