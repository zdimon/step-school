var faces = ["clubs","diams","hearts","spades"];

var ranks = ['Z','A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

var deck = [];

function makeDeck(){
    for(let face_id in faces) {
       
        for(rank_id in ranks) {
            deck.push({
                face: faces[face_id],
                rank: ranks[rank_id],
                face_id: face_id,
                rank_id: rank_id
            });
        }
    }
}

function showCard(card) {
    cardTpl = `<div style="
    width: 69px; height: 94px; 
    background-image: url(images/cards.png);
    background-position: -${card.rank_id*69}px ${card.face_id*94}px;
    ">${card.rank} </div>`;
    $('#deck').append(cardTpl);
}

function shuffle() {
    var currentIndex = deck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * deck.length);
    currentIndex -= 1;
    console.log(randomIndex);
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
    
    }
}

makeDeck();


// deck.forEach(function(el) {
//     showCard(el);
// })

$('#take-card').on('click', function(){
    showCard(deck.pop());
    
    console.dir(deck);
})

shuffle();

