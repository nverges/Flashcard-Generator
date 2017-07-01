var mysql = require('mysql');

var cardFront = process.argv[2];
var cardBack = process.argv[3];

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;

	if (front === true && back === true) {
		console.log(`The Front of this card says: ${front} \nThe Back of this card says: ${back}`);
	} else {
		console.log('Please enter values for the front and back');
	}


};

BasicCard(cardFront, cardBack);

module.exports = BasicCard;