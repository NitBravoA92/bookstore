import { v4 as uuidv4 } from 'uuid';

const booksData = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: '64%',
    chapter: '17',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    completed: '8%',
    chapter: '3',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    completed: '50%',
    chapter: '10',
  },
  {
    id: uuidv4(),
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    completed: '80%',
    chapter: '25',
  },
];

export default booksData;
