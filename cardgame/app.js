var faces = ["clubs","diams","hearts","spades"];

var ranks = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

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
    background-position: ${card.rank_id*69}px ${card.face_id*94}px;
    ">${card.rank} </div>`;
    $('#deck').append(cardTpl);
}

makeDeck();


deck.forEach(function(el) {
    showCard(el);
})

console.dir(deck);

