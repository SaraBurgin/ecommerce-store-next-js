import Head from 'next/head';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Products from '../components/Products';

const Index = () => (
  <>
    <Layout>
      <div className="container">
        <Head key="container">
          <title>Home</title>
          <link rel="icon" href="" />
        </Head>
      </div>
      <Main />
      <Products />
    </Layout>
  </>
);

export default Index;
