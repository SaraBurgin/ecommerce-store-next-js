import Head from 'next/head';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Products from '../components/Products';

const Index = (props) => (
  <>
    <Layout>
        <Head >
          <title>Home</title>
          <link rel="icon" href="" />
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        </Head>
        <Main />
        <Products products={props.products} />
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