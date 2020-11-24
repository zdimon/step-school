let gCount = 0;
/******************************/
class Bankomat{
    constructor(cards){
        cards.forEach( function (item) {
            this.create_card( item );
        })
        
    }
    give_card( card ){
        this.cards.push( card );

        $('#selector').append(`<option id='card${card.count}'>${card.number}</option> `);
    }

    create_card(item){
        let newcard = new Card(item.number, '0000', 0);
        gCount += 1;
        this.cards.push( newcard );
    }
}

/******************************/
class Card{
    constructor(number, pin, money){
        this.number = number;
        this.count = gCount;
        this.count_of_money = money;
        let _pin = pin;

        this.get_pin = function () {
            return _pin;
        }
        gCount += 1;
        
    }

}
/******************************/

let c1 = new Card(111111111,1, 100);
let c2 = new Card(222222222,2, 200);
let c3 = new Card(333333333,3, 300);
let c4 = new Card(444444444,4, 400);

let cards = [c1,c2,c3, c4];
let bankomat = new Bankomat(cards);

// bankomat.give_card(c1);
// bankomat.give_card(c2);
// bankomat.give_card(c3);
// bankomat.give_card(c4);

$('#show_btn').on( 'click', function(){
    let isCorrect = false;
    let card = 0;
    bankomat.cards.forEach( function (item) {
       if( $('#selector').val() == item.number ){
            if( $('#password').val() == item.get_pin()){
                isCorrect = true; 
                card = item;
                
            }                
       }
    })

    if( isCorrect == true ){
        $('#amount_of_money').val(`${card.count_of_money}`);
    }
    else{
        $('#amount_of_money').val('');
    }
})

$('#replay_btn').on( 'click', function () {
    
})