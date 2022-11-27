import Book from "./Book";

const BookShelf = ({shelfType, shelfName, shelfUpdate, books}) => {
    return(

                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{shelfName}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                         {
                            books.filter((book) => book.shelf===shelfType).map(
                              (book) => 
                              <li>
                                <div className="book">
                                <Book key={book.id} book={book} shelfUpdate={shelfUpdate} />
                                </div>
                              </li>
                            )
                          }
                         </ol>
                      </div>
                    </div>

    );
}

export default BookShelf;