
const Book = ({book, bookShelf, shelfUpdate}) => {
    const onShelfChange = (ev) => {
        shelfUpdate(book, ev.target.value);
    }
    const getBookShelf = (book) => {
        if(book.shelf) return book.shelf;
        let _book = bookShelf.filter((bk) => bk.id===book.id);
        if(_book.length > 0){
            return _book[0].shelf;
        }
        return "none";
    }

    return (
            <>
            <div className="book-top">
            <div className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : "" : ""})`
                }}
                ></div>
                <div className="book-shelf-changer">
                <select value={getBookShelf(book)} onChange={onShelfChange}>
                    <option value="None" disabled>
                    { book.shelf ? "Move to..." : "Add to..." }
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(','): ""}</div>
            </>
    );
}

export default Book;