let cards = {
    deck :[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7,7, 7, 7,  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10],
    player1Cards: [],
    player1CardsTotal: 0,
    dealerCards: [],
    dealerCardsTotal: 0,

}
let cardMethods = {
    initialDealPlayer1: function (){
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

    initialDealDealer: function (){
        for(let i = 0; i < 2; i++ ){
       cards.dealerCards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
        
    }
    let html = '<ul>';
    for (let i = 0; i < cards.dealerCards.length; i++){
      
     html += `<li>${cards.dealerCards[i]}</li>`    
    
    }
 
    html = html + '</ul>'
    document.getElementById('dealerCards').innerHTML = html
    cards.dealerCardsTotal;
    
    },
    totalPlayer1Cards: function (){
        for (let i = 0; i < cards.player1Cards.length; i++){
            cards.player1Cards += cards.player1Cards[i];   
         }
         document.getElementById('player1Cards').innerText = cards.player1CardsTotal;
         cardMethods.initialDealPlayer1()
    },
 totalDealerCards: function (){
    for (let i = 0; i < cards.dealerCards.length; i++){
        cards.dealerCardsTotal += cards.dealerCards[i];   
     }
     document.getElementById('dealerCardsTotal').innerText = cards.dealerCardsTotal;

    
    let html1 = '<ul>';
    for (let i = 0; i < 1; i++){
      
     html1 += `<li>${cards.dealerCards[i]}</li>`    
    
    }

    html1 = html1 + '</ul>'
    document.getElementById('dealerCards').innerHTML = html1
    cards.dealerCardsTotal;

 },
 hitMe: function (){
     let cardTotalValue = 21;
    for(let i = 0; i <= cardTotalValue; i++ ){
        cards.player1Cards.push(cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1).pop() )
         
     }
    
},

}




cardMethods.initialDealPlayer1()



document.getElementById('title').innerText = ' you lose casino';
cardMethods.initialDealDealer();
//  document.getElementById('player1Name').innerText = prompt("What is your name")