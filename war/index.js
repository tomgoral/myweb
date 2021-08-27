document.getElementById("new-deck").addEventListener("click",async()=>{
    const result  = await loadNewDeck();
    console.log(result);

    let cardsRemaining = result["remaining"];
    console.log(cardsRemaining)

    while (cardsRemaining > 0){

       const result2 = await drawCardsFromDeck(result.deck_id,2);
       console.log(result2)

       console.log(result2['cards'][0]['code'])
       console.log(result2['cards'][1]['code'])

       const pile01 = await addToPile(result.deck_id, "pile01", result2['cards'][0]['code'])
       console.log(pile01)
       document.getElementById("pile_1").innerHTML = "<img src=img/cardback.png>";
       document.getElementById("myCardPile").innerHTML = pile01["piles"]["pile01"]["remaining"];


       const pile02 = await addToPile(result.deck_id, "pile02", result2['cards'][1]['code'])
       console.log(pile02)
       console.log("Remaining: ",pile02["remaining"])
       cardsRemaining = pile02["remaining"];
       document.getElementById("pile_2").innerHTML = "<img src=img/cardback.png>";
       document.getElementById("yourCardPile").innerHTML = pile02["piles"]["pile02"]["remaining"];

    }

    // document.getElementById("pile_1").innerHTML = "<img src=img/cardback.png>";
    // document.getElementById("myCardPile").innerHTML = pile01["piles"]["pile01"]["remaining"];
    // document.getElementById("pile_2").innerHTML = "<img src=img/cardback.png>";
    // document.getElementById("myCardPile").innerHTML = pile01["piles"]["pile01"]["remaining"];

   })

  
   document.getElementById("draw-cards").addEventListener("click",async()=>{

    let inPlay01 = [];
    let inPlay02 = [];
  

   })




//  Async Functions ================================================





 async function loadNewDeck(){
   let urlNewDeck ="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
   return  (await fetch((urlNewDeck))).json();
   }

 async function drawCardsFromDeck(deckId, numCards){
   let urlDrawCards ="https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + numCards;
   return  (await fetch((urlDrawCards))).json();
   }

 async function addToPile(deckId, pileName, card){
   let urlAddToPile ="https://deckofcardsapi.com/api/deck/" + deckId + "/pile/" + pileName +"/add/?cards=" + card;
   return  (await fetch((urlAddToPile))).json();
   }

async function takeFromPile(deckId, pileName, numCards){
    let urlTakeFromPile ="https://deckofcardsapi.com/api/deck/" + deckId + "/pile/" + pileName +"/draw/?count=" + numCards;
    return  (await fetch((urlTakeFromPile))).json();
    }



