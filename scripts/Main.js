document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.querySelector('.qoute');
    const quotes = ['Design. Develop. Deliver.', 'Code. Create. Conquer.'];

    // Set the initial quote right when the page loads
    let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = currentQuote;

    // Start changing the quote after a short delay
    function changeQuote() {
        let newQuote;
        do {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        } while (newQuote === currentQuote); // Ensure the new quote is different
        currentQuote = newQuote; // Update the current quote
        quoteElement.textContent = newQuote;
    }

    setInterval(changeQuote, Math.random() * (5000 - 2000) + 2000);
});
