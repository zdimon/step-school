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

    check(number, pin) {
        let isCorrect = false;
        this.cards.forEach((card) => {
            console.log(card.number,number);
            if(card.number === number){
                console.log(card.pin,pin);
                if(card.pin === pin){
                    isCorrect = true;
                }
            }
        });
        return isCorrect;
    }

    replanish() {
        console.log('replanish');
        let number = $('#cards').val();
        let pin = $('#pin').val();
        let sum = $('#sum').val();
        if (this.check(number,pin)) {
            console.log('Werry welll');
        } else {
            alert('Pin error!!!');
        }
    }


    showBalance(cardNumber){

    }

    display(){
        const tpl = `
        <div>
            <img src="bobik.png" width="200" />
            <p>
            <select id="cards">
                ${ this.cards.map((el) => `<option value="${el.number}">${el.number}</option>`) }
            </select>
            PIN code <input id="pin" />
            Balance: <input id="sum" />
            <button id="s-button">Show</button>
            <button id="r-button">Repl</button>
            </p>
        <div/>
        `;
       
        $('#root').append(tpl);     
        $('#r-button').on('click',() => {this.replanish()});    
    }

}

const card1 = new Card('123456','123',0);
const card2 = new Card('223456','223',0);
const card3 = new Card('323456','323',0);

const baankomat = new Bankomat([card1,card2,card2]);
baankomat.display();