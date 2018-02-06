function deck_shuffle(name, cards=52){
	this.name = name;
	this.cards = cards;
//	for(i = cards.length-1; i > 0; i--){
//		cards = Math.floor(Math.random() * (i+1));
//	}
//	return cards;

	this.player = function(){
		console.log("Name: " + this.name)
	}

	this.hand = function(){
		console.log("Hand:" + this.cards)
	}
}
var deck_shuffle = new deck_shuffle("Rick Sanchez");
deck_shuffle.player();
deck_shuffle.hand();
	
//function shuffle(array) {
  //var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  //while (0 !== currentIndex) {

    // Pick a remaining element...
    //randomIndex = Math.floor(Math.random() * currentIndex);
    //currentIndex -= 1;

    // And swap it with the current element.
    //temporaryValue = array[currentIndex];
    //array[currentIndex] = array[randomIndex];
    //array[randomIndex] = temporaryValue;
  //}

  //return array;
//}

// Used like so
//var arr = [];
//arr = shuffle(arr);
//console.log(arr);