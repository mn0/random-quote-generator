// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array populated by quotes objects:

var quotes = [
  {
    quote: "We have so much time and so little to do. Strike that, reverse it.",
    source: "Roald Dahl",
    citation: "Charlie and the Chocolate Factory",
    tags: "funny"
  },

  {
    quote: "Humility is no substitute for a good personality.",
    source: "Fran Leibowitz",
    citation: "Metropolitan Life",
    year: 1978,
    tags: "philosophy"
  },

  {
    quote: "I've had a perfectly wonderful evening. But this wasn't it.",
    source: "Groucho Marx",
    tags: "funny"
  },

  {
    quote: "If you wish success in life, make perseverance your bosom friend, experience your wise counselor, caution your elder brother and hope your guardian genius.",
    source: "Joseph Addison",
    tags: "success"
  }

];

// creates a random index number:

function getRandomQuote(){
  var indexNumber = Math.floor(Math.random() * (quotes.length));
  return (quotes[indexNumber]);
};


// calls getRandomQuote, stores quote as variable, inserts.

function printQuote() {

  var selectedQuote = getRandomQuote();

  //assembles the quote into its HTML form


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

  var fullQuoteHTML;

  if (citation == false && year == false){
    fullQuoteHTML = quoteAndSource + '</p>';
  } else if (citation != false && year == false){
    fullQuoteHTML = quoteAndSource + citation + '</p>';
  } else if (citation == false && year != false){
    fullQuoteHTML = quoteAndSource + year + '</p>';
  } else {
    fullQuoteHTML = quoteAndSource + citation + year + '</p>';
  };

  //inserts the returned string from the fullQuoteHTML function into the DOM

  document.getElementById("quote-box").innerHTML = fullQuoteHTML;

};

// have the page load a quote object from the array on refresh, and not the one embedded in the HTML

printQuote();

// interval timer for changing quotes which is reset if load quote button is pressed

function changeColor() {
  var backgroundColor = document.getElementByTagName("body background-color")
  console.log(backgroundColor);
}

changeColor();


// color changes with quote




// way to mark quotes in the array as displayed or not



