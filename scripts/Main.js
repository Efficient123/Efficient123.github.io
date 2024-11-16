document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.querySelector('.qoute');
    const quotes = ['Design. Develop. Deliver.', 'Code. Create. Conquer.'];

    
    let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = currentQuote;

    
    function changeQuote() {
        let newQuote;
        do {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        } while (newQuote === currentQuote); 
        currentQuote = newQuote; 
        quoteElement.textContent = newQuote;
    }

    setInterval(changeQuote, Math.random() * (5000 - 2000) + 2000);
});
