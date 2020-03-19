import Head from 'next/head';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Products from '../components/Products';

const Index = props => (
  <>
    <Layout>
      <div className="container">
        <Head key="container">
          <title>Home</title>
          <link rel="icon" href="" />
        </Head>
        <Main />
        <Products products={props.products} />
      </div>
    </Layout>
  </>
);

export default Index;

export async function getStaticProps() {
  const { getAllProducts } = await import('../db');
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
  };
}
