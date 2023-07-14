const BookForm = () => (
  <div className="book-form">
    <p className="book-form-title">ADD NEW BOOK</p>
    <form className="book-add-book-form">
      <input type="text" className="book-input" id="inputTitle" placeholder="Book title" />
      <input type="text" className="book-input" id="inputAuthor" placeholder="Author" />
      <button type="submit" id="btn-add-book">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
