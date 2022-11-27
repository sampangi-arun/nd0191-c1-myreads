import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";
const BookSearch = ({bookShelf, shelfUpdate}) => {
   const [searchText, setSearchText] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
      const getBooks = async () => {
           let res = await BooksAPI.search(searchText, 10);
           console.log(res);
              if(res.error) res = [];
              setSearchResults(res);
           }
     if(searchText.length>0) getBooks();
      return(()=>{
          setSearchResults([]);
      })
   }, 
    [searchText])

    return (

        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to = "/"
            >
             Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value= {searchText}
                placeholder="Search by title, author, or ISBN"
                onChange={(ev) => setSearchText(ev.target.value) }
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
               {searchResults.map((book) => {
                   return (
                    <li key={book.id}>
                     <div className="book">
                          <Book book={book} bookShelf={bookShelf} shelfUpdate={shelfUpdate} />
                     </div>
                    </li>        
                   );
               })}                  
            </ol>
          </div>
        </div>
    );
}

export default BookSearch;