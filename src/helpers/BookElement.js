import { v4 as uuidv4 } from 'uuid';

const BookElement = (title, author) => ({
  item_id: uuidv4(),
  title,
  author,
  category: 'Fiction',
});

export default BookElement;
