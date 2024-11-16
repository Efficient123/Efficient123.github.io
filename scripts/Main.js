document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.querySelector('.qoute');
    const quotes = ['Design. Develop. Deliver.', 'Code. Create. Conquer.'];

    // Set the initial quote right when the page loads
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;

    // Start changing the quote after a short delay
    function changeQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    }

    setInterval(changeQuote, Math.random() * (5000 - 2000) + 2000);
});