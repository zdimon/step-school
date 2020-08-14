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
    
}

makeDeck();
console.dir(deck);

