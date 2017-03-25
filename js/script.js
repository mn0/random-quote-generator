// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "the quote",
    source: "source",
    citation: "citation",
    year: 1900,
    tags: "funny"
  },

  {
    quote: "the quote",
    source: "source",
    citation: "citation",
    year: 1900,
    tags: "political"
  },

  {
    quote: "the quote",
    source: "source",
    citation: "citation",
    year: 1900,
    tags: "historical"
  },

  {
    quote: "the quote",
    source: "source",
    citation: "citation",
    year: 1900,
    tags: "historical"
  }

];
