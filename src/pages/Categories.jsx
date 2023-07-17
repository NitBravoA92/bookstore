import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout';

const Categories = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'categories/getStatus' });

  const categories = useSelector((state) => state.categories);

  return (
    <Layout>
      <section className="page" id="categories">
        <div className="container">
          <h2>{categories}</h2>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
