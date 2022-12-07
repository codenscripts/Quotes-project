const quoteContainer = document.getElementById('q-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading () {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete () {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

const newQuote = () => {
  loading();
  const quoteNumber = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  if(!quoteNumber.author) quoteText.textContent = 'Unknown';
   else quoteText.textContent = quoteNumber.text;
  
  if(quoteNumber.text.length > 60 ) quoteText.classList.add('long-quote')
    else quoteText.classList.remove('long-quote');
  authorText.textContent = quoteNumber.author;
  complete();
}

async function getQuotes (){
  loading();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
  }
}

// function tweetQuote () {
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
//   window.open(twitterUrl, '_blank');
// }

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuotes();