// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array populated by quotes objects:

var quotes = [
  {
    quote: "We have so much time and so little to do. Strike that, reverse it.",
    source: "Roald Dahl",
    citation: "Charlie and the Chocolate Factory",
    tags: ["funny"]
  },

  {
    quote: "Humility is no substitute for a good personality.",
    source: "Fran Leibowitz",
    citation: "Metropolitan Life",
    year: 1978,
    tags: ["philosophy"]
  },

  {
    quote: "I've had a perfectly wonderful evening. But this wasn't it.",
    source: "Groucho Marx",
    tags: ["funny"]
  },

  {
    quote: "If you wish success in life, make perseverance your bosom friend, experience your wise counselor, caution your elder brother and hope your guardian genius.",
    source: "Joseph Addison",
    tags: ["success"]
  }

];

var displayedQuotes = [];
var timer;

// creates a random index number:

function getRandomQuote(){

  var indexNumber = Math.floor(Math.random() * (quotes.length));
  var selectedQuote = quotes[indexNumber];

  // removing the new quote

  removeQuote(selectedQuote);

  //  refreshes the quotes array if all already displayed

  if(quotes.length === 0) {
    resetQuotes();
  };

  return selectedQuote;

};

// calls getRandomQuote(), stores quote as variable, inserts.

function printQuote() {

  var selectedQuote = getRandomQuote();

  //assembles the quote parts into their HTML forms

  if (selectedQuote.hasOwnProperty("citation")){
    var citation = '<span class="citation">' + selectedQuote.citation + '</span>';
  } else {
    var citation = false;
  };

  if (selectedQuote.hasOwnProperty("year")){
    var year = '<span class="year">' + selectedQuote.year + '</span>';
  } else {
    var year = false;
  };

  var quoteAndSource = '<p class="quote">' + selectedQuote.quote + '</p>' + '<p class="source">'
    + selectedQuote.source;

  // assembles the full quote

  var fullQuoteHTML;

  if (citation == false && year == false){
    fullQuoteHTML = quoteAndSource;
  } else if (citation != false && year == false){
    fullQuoteHTML = quoteAndSource + citation;
  } else if (citation == false && year != false){
    fullQuoteHTML = quoteAndSource + year;
  } else {
    fullQuoteHTML = quoteAndSource + citation + year;
  };

  fullQuoteHTML = fullQuoteHTML  + '</p>';

  //inserts fullQuoteHTML into the DOM

  document.getElementById("quote-box").innerHTML = fullQuoteHTML;


  //calls changeColor();

  changeColor();

  // prints the printed quote to the console.
  console.log(selectedQuote);
  resetRefreshQuote();
};

// refresh quote

function refreshQuote() {
  timer = setInterval(printQuote, 5000);
}

// resets the timer for when the printQuote function is called

function resetRefreshQuote() {
  clearInterval(timer);
  refreshQuote();
}

// a function to reset the quotes array once all have been displayed

function resetQuotes() {
  quotes = displayedQuotes;
  displayedQuotes = [];
};

// a function to remove the quote once it's been printed and add it to the array of displayed quotess

function removeQuote(selectedQuote) {
  quotes.splice(quotes.indexOf(selectedQuote), 1);
  displayedQuotes.push(selectedQuote);
};

// color changes with quote

function changeColor() {

// returns a number between 0 and 255 for the RGB values

  function getrgbValue() {
    return Math.floor(Math.random() * 256 );
  };

  var r = getrgbValue();
  var g = getrgbValue();
  var b = getrgbValue();

  var newColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.backgroundColor = newColor;

};

// have the page load a quote object from the array on refresh, and not the one embedded in the HTML

printQuote();



