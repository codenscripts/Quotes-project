let apiQuotes = [];

const newQuote = () => {
  const quoteNumber = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quoteNumber);
}

async function getQuotes (){
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    
  }
}

getQuotes();