import { v4 as uuidv4 } from 'uuid';

const BookElement = (title, author) => ({
  id: uuidv4(),
  title,
  author,
  category: "Fiction",
  completed: '64%',
  chapter: '17',
});

export default BookElement;
