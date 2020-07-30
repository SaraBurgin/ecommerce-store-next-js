import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
      <Head>
        <title>Cheese it!</title>
      </Head>
      <Header />
        {props.children}{' '}
        {/*Whatever page we are on this is where it is going to output. With props.*/}
      <Footer />
  </>
);

export default Layout;
