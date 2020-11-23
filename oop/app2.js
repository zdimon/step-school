class Card {
    constructor(number,pin,account){
        this.number = number;
        this.pin = pin;
        this.account = account;
    }
}

class Bankomat{
    cards = [];
    constructor(cards) {
        this.cards = cards;
    }

    check(number) {

    }

    replanish(cardNumber, sum) {

    }


    showBalance(cardNumber){

    }

    display(){
        const tpl = `
        <div>
            <img src="bobik.png" width="200" />
            <p>
            <button id="s-button">Show</button>
            <button id="r-button">Repl</button>
            </p>
        <div/>
        `;

        $('#root').append(tpl);        
    }

}

const card1 = new Card(123456,123,0);
const card2 = new Card(223456,223,0);
const card3 = new Card(323456,323,0);

const baankomat = new Bankomat([card1,card2,card2]);
baankomat.display();