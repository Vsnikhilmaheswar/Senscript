import React, { useState, useEffect } from 'react';
import LoadingIcons from 'react-loading-icons'
const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  setTimeout(() => {
    setIsLoading(false);
}, 2000);
  
  const fetchInfo = () => {
    return fetch(`https://api.javascripttutorial.net/v1/quotes/?page=1&limit=10`)
    .then(response => {
      if (!response.ok) {
        throw new Error('something happended');
      }
      return response.json();
    })
    .then(data => {
      setQuotes(data.data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }

  useEffect(() => {
    
    fetchInfo()
      
  }, []);

  if (loading) return (<LoadingIcons.Bars />) ;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='container'>
      <h1 >Quotes</h1>
      <ul >
        {quotes.map(quote => (
          <ol  className='list' key={quote.id}>
       
            <p>{quote.id}) "{quote.quote}"  <br/>- {quote.author}</p>
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default App;
