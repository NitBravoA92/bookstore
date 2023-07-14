import Layout from './Layout';
import BookList from '../components/BookList';

const Books = () => (
  <Layout>
    <section className="page" id="books">
      <div className="container">
        <BookList />
      </div>
    </section>
  </Layout>
);

export default Books;
