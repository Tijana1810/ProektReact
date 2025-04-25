import React, { useState, useEffect } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/books') 
      .then((response) => response.json())
      .then((data) => {
        setBooks(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false); 
      });
  }, []); 

  

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Аuthor: {book.author}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
