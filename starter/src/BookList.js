import { Link } from 'react-router-dom';
import BookShelf  from './BookShelf';

const BookList = ({books, shelfUpdate}) => {
  let obj = {
    currentlyReading: "Currently Reading",
    wantToRead : "Want to Read",
    read: "Read"
  }

  return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {
                Object.keys(obj).map((doc_type) => {
                  return (
                    <BookShelf shelfType={doc_type} shelfName={obj[doc_type]} shelfUpdate={shelfUpdate} books={books} />
                  )
                })
              }          
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
      </div>
    );
}

export default BookList;