function Card(image, id){
  this.image = image;
  this.id = id;
  this.showing = 0;
}


var card0 = new Card("banana", 1);
var card1 = new Card("banana", 1);

var card2 = new Card("orange", 2);
var card3 = new Card("orange", 2);

var card4 = new Card("apple", 3);
var card5 = new Card("apple", 3);

var card6 = new Card("coffee", 4);
var card7 = new Card("coffee", 4);

var card8 = new Card("computer", 5);
var card9 = new Card("computer", 5);

var card10 = new Card("headphones", 6);
var card11 = new Card("headphones", 6);


$(document).ready(function (){

  for(var i=0; i <=11; i++){
    var card = eval("card"+i);
    var thecard ="#"+"card"+i;
    $("#"+"card"+i).empty().append(card.image);
  }
});
