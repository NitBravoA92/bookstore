import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import BookElement from '../helpers/BookElement';
import AddButton from './AddButton';
import InputForm from './InputForm';

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
        <InputForm type="text" id="inputTitle" placeholder="Book title" isRequired />
        <InputForm type="text" id="inputAuthor" placeholder="Book Author" isRequired />
        <AddButton />
      </form>
    </div>
  );
};

export default BookForm;
