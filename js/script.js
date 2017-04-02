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
    quote: "As a scientist, I am not sure anymore that life can be reduced to a class struggle, to dialectical materialism, or any set of formulas. Life is spontaneous and it is unpredictable, it is magical. I think that we have struggled so hard with the tangible that we have forgotten the intangible.",
    source: "Diane Frolov and Andrew Schneider",
    citation: "Northern Exposure, Zarya",
    year: 1994,
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

  function fullQuoteHTML() {

    if (selectedQuote.hasOwnProperty("citation")){
      var citation = selectedQuote.citation;
    } else {
      var citation = false;
    };

    if (selectedQuote.hasOwnProperty("year")){
      var year = selectedQuote.year;
    } else {
      var year = false;
    }

    var quoteAndSource = '<p class="quote">' + selectedQuote.quote + '</p>' + '<p class="source">'
      + selectedQuote.source;

  };

  //inserts the returned string from the fullQuoteHTML function into the DOM

  document.getElementById("quote-box").innerHTML = fullQuoteHTML();

};


<p class="quote">You can do anything but not everything</p>
<p class="source">David Allen<span class="citation">Making It All Work</span><span class="year">2009</span></p>



// have the page load a quote object from the array on refresh, and not the one embedded in the HTML
// interval timer for changing quotes which is reset if load quote button is pressed
// color changes with quote
// way to mark quotes in the array as displayed or not
