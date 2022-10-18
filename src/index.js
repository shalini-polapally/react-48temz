import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books.js';
import Book from './Book.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

root.render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
