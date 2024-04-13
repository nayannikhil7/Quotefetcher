import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setquote] = useState({ text: "", author: "" });
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetchQuote();
    }, []);
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setquote(randomQuote);
        setloading(false);
    }

    return (
        <div>
            {loading && <p>Loading....</p>}
            <button onClick={fetchQuote}>Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}
