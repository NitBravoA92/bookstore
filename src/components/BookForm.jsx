import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import BookElement from '../store/data';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { inputTitle, inputAuthor } = form;
    dispatch(addBook(BookElement(inputTitle.value, inputAuthor.value)));
    form.reset();
  };

  return (
    <div className="book-form">
      <p className="book-form-title">ADD NEW BOOK</p>
      <form className="book-add-book-form" onSubmit={handleSubmit}>
        <input type="text" className="book-input" id="inputTitle" placeholder="Book title" required />
        <input type="text" className="book-input" id="inputAuthor" placeholder="Author" required />
        <button type="submit" id="btn-add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
