import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/books")
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Грешка при земање на книги:", error);
      });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> from {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нема книги во моментов.</p>
      )}
    </div>
  );
};

export default Books;
