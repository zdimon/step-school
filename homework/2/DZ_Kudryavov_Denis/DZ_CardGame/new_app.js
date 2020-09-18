app = {
    userAccount: 0,
    userBet: 0,
    userScore: 0,
    faces: ["clubs","diams","hearts","spades"],
    ranks:['Z','A',2,3,4,5,6,7,8,9,10,'J','Q','K'],
    deck: [],
    makeDeck: function(){
        for(let face_id in this.faces) {
           
            for(rank_id in this.ranks) {
                this.deck.push({
                    face: this.faces[face_id],
                    rank: this.ranks[rank_id],
                    face_id: face_id,
                    rank_id: rank_id
                });
            }
        }
    },

    shuffle: function() {
        var currentIndex = this.deck.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * this.deck.length);
        currentIndex -= 1;
        // console.log(randomIndex);
        temporaryValue = this.deck[currentIndex];
        this.deck[currentIndex] = this.deck[randomIndex];
        this.deck[randomIndex] = temporaryValue;
        
        }
    },

    getScoreByCard: (card) => {
        console.log(card);
        switch (card.rank) {
            case 2:
                return 2;
            break;
            case 3:
                return 3;
            break;
            case 4:
                return 4;
            break;
            case 5:
                return 5;
            break;
            case 6:
                return 6;
            break;
            case 7:
                return 7;
            break;
            case 8:
                return 8;
            break;
            case 9:
                return 9;
            break;
            case 10:
                return 10;
            break;
            case 'A':
                return 11;
            break;
            case 'K':
                return 4;
            break;
            case 'Q':
                return 3;
            break;
            case 'J':
                return 2;
            break;
            case 'Z':
                return 21;
            break;
        
            default:
                break;
        }
    },

    showCard: function(card) {
        cardTpl = `<div style="
        width: 69px; height: 94px; 
        background-image: url(images/cards.png);
        background-position: -${card.rank_id*69}px ${card.face_id*94}px;
        ">${card.rank} </div>`;
        $('#deck').append(cardTpl);

        this.userScore = this.userScore+this.getScoreByCard(card);
        if(this.userScore>21)
        {
            alert("GameOver");
            $('#take-card').hide();
        }
        $('#user-score').html(this.userScore);

    },

    init:  function() {
        
        this.makeDeck();
        this.shuffle();
        //console.log(this.deck);
        $('#take-card').on('click', () => {
            //console.log(this);
            this.showCard(this.deck.pop());
        })

        var addMoneyButton = $('#add-money-button');
        var betMoneyButton = $('#bet-money-button');
        var betMoneyButton = $('#bet-money-button');
        var userAccountP = $('#user-account');
        var userBetP = $('#user-bet');

        addMoneyButton.on('click',()=>{
            console.log('ddddsefwefgsdgsd');
            this.userAccount = 100;
            userAccountP.html(this.userAccount);
            addMoneyButton.hide();
            betMoneyButton.show();

        });

        betMoneyButton.on('click', ()=>{
            this.userBet = 10;
            this.userAccount = this.userAccount - 10;
            userAccountP.html(this.userAccount);
            userBetP.html(this.userBet);
            betMoneyButton.hide();

        })

    }
}

app.init();