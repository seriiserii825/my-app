import React, {createContext, useState} from 'react';

export const CustomContext = createContext();
export const Context = (props) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'Js'},
    {id: 2, title: 'Jquery'},
    {id: 3, title: 'React'}
  ]);
  const addBook = (book) => {
    setBooks([book, ...books]);
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }
  const value = {
    books,
    addBook,
    removeBook
  }
  return <CustomContext.Provider value={value}>
    {props.children}
  </CustomContext.Provider>
}
