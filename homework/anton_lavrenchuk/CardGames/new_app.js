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
                if (this.ranks[rank_id] != 'Z') {
                    this.deck.push({
                        face: this.faces[face_id],
                        rank: this.ranks[rank_id],
                        face_id: face_id,
                        rank_id: rank_id
                    });
                }
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

    getScoreByCard: function(card) {
        if (card.rank == 'J' || card.rank == 'Q' || card.rank == 'K') {
            return 10;    
        }
        else if(card.rank == 'A') {
            return ( this.userScore > 10 ) ? 1 : 11;
        }
        else{
            return card.rank;
        }
    },

    showCard: function(card) {
        cardTpl = `<div id="cards" style="
        width: 69px; height: 94px; 
        background-image: url(images/cards.png);
        background-position: -${card.rank_id*69}px ${card.face_id*94}px;
        ">${card.rank} </div>`;
        $('#deck').append(cardTpl);

        this.userScore = this.userScore+this.getScoreByCard(card);
        $('#user-score').html(this.userScore);
    },

    init:  function() {
        $('#take-card').hide();  
        this.makeDeck();
        this.shuffle();
        //console.log(this.deck);
        $('#take-card').on('click', () => {
            //console.log(this);
            this.showCard(this.deck.pop());
            if(this.userScore == 21)
            {
                $('#take-card').hide();  
                $('#user-score').html(`You win!( ${this.userScore} )`);
                this.userScore = 0;
                this.userAccount += 2 * this.userBet;
                userAccountP.html(this.userAccount);
                $('#user-bet').html(0);
                betMoneyButton.show();
            }
            if (this.userScore > 21) {
                $('#user-bet').html(0);
                $('#take-card').hide();  
                $('#user-score').html(`You lose!( ${this.userScore} )`);
                this.userScore = 0;
                betMoneyButton.show();
            }
        })

        var addMoneyButton = $('#add-money-button');
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
            if (this.userAccount < this.userBet) {
                betMoneyButton.show();
            }
            else {
                this.userAccount = this.userAccount - 10;
                userAccountP.html(this.userAccount);
                userBetP.html(this.userBet);
                betMoneyButton.hide();
                $("#deck").empty();
                $('#take-card').show();  
            }
        })

    }
}

app.init();