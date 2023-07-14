import Layout from './Layout';
import BooksContent from '../components/BooksContent';

const Books = () => (
  <Layout>
    <section className="page" id="books">
      <div className="container">
        <BooksContent />
      </div>
    </section>
  </Layout>
);

export default Books;
