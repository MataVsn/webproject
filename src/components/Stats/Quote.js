import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const url = 'https://api.quotable.io/random';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, '_blank');
  };

  const { content, author } = quotes;
  return (
    <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div>
          <Button onClick={getNewQuote}>New Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
