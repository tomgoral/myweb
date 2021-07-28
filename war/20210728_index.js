let deckId, deck_count, pile01_count, pile02_count


document.getElementById("new-deck").addEventListener("click", getNewDeck)

function getNewDeck() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            deck_count = data.remaining;
            deckId     = data.deck_id;
            console.log(deckId, deck_count)
            makeTwoPiles(deckId,deck_count);
        })
return deckId, deck_count
}

function makeTwoPiles(deckId,deck_count){
     while (deck_count > 0) {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        deck_count = data.remaining;
        deckId     = data.deck_id;
        console.log(deckId, deck_count)
        
    }) 
  }
}
  


document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            // document.getElementById("card_1").innerHTML =data.cards[0].image
            card1_link = "<img src=" + data.cards[0].image +">"
            document.getElementById("card_1").innerHTML = card1_link
            document.getElementById("pile_1").innerHTML = "<img src=img/cardback.png>"

            card2_link = "<img src=" + data.cards[1].image +">"
            document.getElementById("card_2").innerHTML = card2_link
            document.getElementById("pile_2").innerHTML = "<img src=img/cardback.png>"
        
        })
})



