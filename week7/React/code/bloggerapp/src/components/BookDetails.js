import React from 'react';

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" },
  { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford" }
];

const BookDetails = () => {
  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
