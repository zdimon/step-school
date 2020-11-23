class Card {
    constructor(number,pin,account){
        var _pin = pin
        this.number = number;
        this.account = account;
        this.getPin = function()
        {
            return _pin;
        }
    }

}

class Bankomat{
    cards = [];
    constructor() {
       this.createCard();
    }

    check(number, pin) {
        let isCor = false;
        this.cards.forEach((card) =>{
            if (card.number === number) {
                if (card.getPin === pin) {
                    isCor = true;
                }
            }
        });
        return isCor;
    }

    createCard(cards)
    {
        
        const card1 = new Card('123456','123',0);
        const card2 = new Card('223456','223',0);
        const card3 = new Card('323456','323',0);
        this.cards = ([card1,card2,card3]);;
    }

    replanish() {
        let number = $('#cards').val();
        let pin = $('#pin').val();
        let balance = $('#balance').val();
        if(this.check(number, pin))
        {
            console.log("very well");
        }
        else
        {
            alert("error");
        }
    }

    display(){
        const tpl = `
        <div>
            <img src="bank.jpg" width="200" />
            <p>
            <select id="cards">
                ${ this.cards.map((el) => `<option value= "${el.number}">${el.number}</option>`) }
            </select>

            PIN CODE <input id = "pin" />
            Balance: <input id = "balance" />
            <br><br>
            <button id="s-button">Show</button>
            <button id="r-button">Repl</button>
            </p>
        <div/>
        `;

        $('#con').append(tpl);    
        $('#r-button').on('click', () => {this.replanish()});    
    }

}

const baankomat = new Bankomat();
baankomat.display();

baankomat.cards[0] = '222';
