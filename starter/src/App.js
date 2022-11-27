import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  
  const shelfUpdate = (book, value) => {
      book.shelf = value;      
      BooksAPI.update(book, value);
      setBooks([...books.filter((bk)=>bk.id!==book.id), book]);
  }

  useEffect(
    () => {
      const getBooks = async() => {
        let results = await BooksAPI.getAll();
        setBooks(results);
      }
      getBooks();
    return(()=> {
        setBooks([]);
      })
    },
    []
  );

  return (
    <Routes>
        <Route
          exact 
          path = "/"
          element = {
            <BookList books={books} shelfUpdate={shelfUpdate}/>
          }
         />
         <Route
          path = "/search"
          element = {
            <BookSearch shelfUpdate={shelfUpdate} bookShelf={books}/>
          }
         />
    </Routes>

  );
}

export default App;
