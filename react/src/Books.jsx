import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error", err));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.length === 0 ? (
        <p>Nema knigi.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title} - {book.author}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;