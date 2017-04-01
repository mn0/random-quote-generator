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
    citation: "citation",
    tags: "success"
  }

];


// creates a random index number:

function getRandomQuote(){
  var indexNumber = Math.floor(Math.random() * (quotes.length));
  return (quotes[indexNumber]);
};


// calls getRandomQuote, stores quote as variable, inserts .

function printQuote(getRandomQuote) {

  var selectedQuote = getRandomQuote;

  document.getElementsByClassName("quote")[0].innerHTML = selectedQuote.quote;

  document.getElementsByClassName("source")[0].innerHTML = selectedQuote.source;

  // if (!quote.citation){
  //   document.getElementsByClassName("citation")[0].textContent = quote.citation;
  // };

  // if (!quote.year) {
  //   document.getElementsByClassName("year")[0].textContent = quote.year;
  // };

};
