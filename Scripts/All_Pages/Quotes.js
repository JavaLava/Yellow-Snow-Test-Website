/*
	Copyright Oliver Perry 22/11/2013
*/
displayQuotes();

function displayQuotes() {

var quotes = [	"\" We make pretty things! \"", 
				"\" The 'P' is silent \"", 
				"\" All-round good eggs \"", 
				"\" No artificial colours or flavours \"",
				"\" Putting the fun into funding \"", 
				"\" Putting the art in party \"", 
				"\" Built in a cave with a box of scraps \"", 
				"\" Anything, Anytime, Anywhere \"",
				"\" Whatever you say, we probably did it \"", 
				"\" Everything's for sale! \"", 
				"\" #YOLOSNOW \"", 
				"\" I'm better than okay, I'm an artist \"",
				"\" Passion, Enjoyment, Production \"", 
				"\" Chewed by mice \"", 
				"\" Release the sorbet \"", 
				"\" The Susan Boyle of the industry \""];
var quotesClone = quotes.slice(0);
var index = 0;
var lastQuote = "Funny Quote";   //stop last and first quote being the same

setInterval(timeCycle, 15000);
timeCycle();

	function timeCycle() {
	
		if (quotesClone.length === 1) {
			lastQuote = quotesClone[0];
		}
		
		if (!quotesClone.length) {
			quotesClone = quotes.slice(0);
		}
		
		index = Math.floor(Math.random() * quotesClone.length);
		
		if (lastQuote === quotesClone[index] && quotesClone.length === quotes.length) {
			quotesClone.splice(index, 1);
		} else {
			document.getElementById("quoteText").innerHTML = quotesClone[index];
			quotesClone.splice(index, 1);
		}
	}
}