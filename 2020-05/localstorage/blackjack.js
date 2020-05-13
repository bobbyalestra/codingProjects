let cards = {
    deck :[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7,7, 7, 7,  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardsTotal: 0,
    dealerCards: [],

}
let cardMethods = {
    initialDeal: function (){
        for(let i = 0; i < 2; i++ ){
       cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
        
    }
    let html = '<ul>';
    for (let i = 0; i < cards.player1Cards.length; i++){
      
     html += `<li>${cards.player1Cards[i]}</li>`    
    
    }
 
    html = html + '</ul>'
    document.getElementById('player1Cards').innerHTML = html
    cards.player1CardsTotal;
    },

    totalPlayer1Cards: function (){
        for (let i = 0; i < cards.player1Cards.length; i++){
            cards.player1CardsTotal += cards.player1Cards[i];   
         }
         document.getElementById('player1CardsTotal').innerText = cards.player1CardsTotal;

    }
 }

document.getElementById('title').innerText = ' you lose casino';
cardMethods.initialDeal();
//document.getElementById('player1Name').innerText = prompt("What is your name")