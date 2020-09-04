app = {
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
        console.log(randomIndex);
        temporaryValue = this.deck[currentIndex];
        this.deck[currentIndex] = this.deck[randomIndex];
        this.deck[randomIndex] = temporaryValue;
        
        }
    },

    showCard: function(card) {
        cardTpl = `<div style="
        width: 69px; height: 94px; 
        background-image: url(images/cards.png);
        background-position: -${card.rank_id*69}px ${card.face_id*94}px;
        ">${card.rank} </div>`;
        $('#deck').append(cardTpl);
    },

    init:  function() {
        
        this.makeDeck();
        this.shuffle();
        console.log(this.deck);
        $('#take-card').on('click', () => {
            console.log(this);
            this.showCard(this.deck.pop());
        })
    }
}

app.init();