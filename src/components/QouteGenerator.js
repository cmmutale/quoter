import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion, AnimatePresence } from "framer-motion";


function QouteGenerator() {
    const API_URL = 'https://api.quotable.io/random';
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [showButton, setShowButton] = useState(false);

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
        <div id='quote-box'>
            <div className='quote-content__container'>
                <div><span id='author'> - {author} -</span></div>
                <div onClick={pullQuotes}>
                    <span id='text'>{quote}</span>
                </div>
            </div>
            <div className='quote-controls'>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(quote);
                        alert('Quote has been copied!')
                    }}
                    id='copy-icon'
                >
                    <span id=''>copy</span>
                </button>
                <div className='share-controls'>
                    <button
                        className='share-button'
                        onClick={() => setShowButton(!showButton)}
                    >
                        <span>share</span>
                    </button>
                    <div id='share-content' className={`share-content ${(showButton) ? "" : "hidden"}`}>
                        <div>
                            <a
                                className='button'
                                href={`https://twitter.com/intent/tweet?text="${quote}" -    ${author}&hashtags=quote`} id='tweet-quote'
                                target='_blank'><span>tweet</span></a>
                        </div>
                    </div>
                </div>
                {/* <button onClick={pullQuotes} id='new-quote'>New quote</button> */}
            </div>
        </div>
    )
}

export default QouteGenerator