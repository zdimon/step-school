class Bankomat {
    cards = [];
    constructor() {
        this.createCards();
    }

    check(number, pin) {
        let isCorrect = false;
        this.cards.forEach((card) => {
            if(card.number === Number(number)){
                if(card.getPin() === Number(pin)){
                    isCorrect = true
                }
            }
        })
        return isCorrect;
    }

    replanish() {
        let number = $('#selectCard').val()
        let pin = $('#pin').val()
       // let sum = $('#sum').val()

        if(this.check(number, pin)) {
            console.log('Very well!')
        } else {
            console.log('Error')
        }
    }

    showBalance(cardNumber){
        
    }

    display() {
        const tpl = `
        <div>
            <img src="Bankomat.jpg" width='200px'><br>
            Card number <select id="selectCard">
                ${ this.cards.map((el) => `<option value="${el.number}">${el.number}</option>`)}
            </select><br>
            PIN code<input id="pin"><br>
            Sum <input id="sum"><br>
            <button id="s-button">Show</button>
            <button id="r-button">Repl</button>
        </div>`;

        $('#root').append(tpl);
        $('#r-button').on('click', () => { this.replanish() })
    }

    createCards(){ 
        const card1 = new Card(123456, 123, 0);
        const card2 = new Card(223456, 223, 0);
        const card3 = new Card(323456, 323, 0);
        this.cards = [card1, card2, card3];
    }
}

class Card {
    constructor(number, pin, account) {
        var _pin = pin;
        this.number = number;
        this.account = account;
        this.getPin = function() {
            return _pin;
        }
    }
}


const bankomat = new Bankomat();
bankomat.display();