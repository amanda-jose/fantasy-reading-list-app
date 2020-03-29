import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Six of Crows", author: "Leigh Bardugo", id: 1 },
    { title: "Steel Crow Saga", author: "Paul Kreuger", id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {/* represents the components that the provider will wrap */}
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
