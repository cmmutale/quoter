import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


function QouteGenerator() {
    const API_URL = 'https://api.quotable.io/random';
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    function pullQuotes() {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setAuthor(data.author)
                setQuote(data.content)
                // console.log(data)
            })
    }

    useEffect(() => {
        pullQuotes()
    }, [])

    return (
        <div className='' id='quote-box'>
            <div className='quote-content'>
                <span id='text'>
                    {quote}
                </span>
                <span id='author'>
                    - {author}
                </span>
            </div>
            <div className='quote-controls'>
                <div>
                    <a href={`https://twitter.com/intent/tweet?text="${quote}" -    ${author}&hashtags=quote`} id='tweet-quote' target='_blank'>Tweet</a>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(quote);
                            alert('Quote has been copied!')
                        }}
                        id='copy-quote'
                    >copy</button>
                </div>
                <button onClick={pullQuotes} id='new-quote'>New quote</button>
            </div>
        </div>
    )
}

export default QouteGenerator