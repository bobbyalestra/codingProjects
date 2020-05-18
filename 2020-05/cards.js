
     let deck = [{Value: 'A', Suit: 'Spades'}, {Value: 'A', Suit: 'Diamonds'}, {Value: '2', Suit: 'Clubs'}, {Value: '2', Suit: 'Spades'}, {Value: '2', Suit: 'Diamonds'}, {Value: '2', Suit: 'Clubs'}]
   
   deckOfCards ={
suit : ['spades','diamonds', 'hearts', 'clubs' ],
 cardNumber : [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'  ] ,

   getDeck : function()
{
	let deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < cardNumber.length; j++)
		{
			let card = {cardNumber: cardNumber[j], suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
},
    
    
   shuffle: function(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

    }
  

    function renderDeck(deck)
{
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		cardNumber.className = "value";
		Suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}