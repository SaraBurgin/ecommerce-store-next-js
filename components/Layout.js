import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
    <div>
      <Head>
        <title>Cheese it!</title>
      </Head>
      <Header />
      <div className="container">
        {props.children}{' '}
        {/*Whatever page we are on this is where it is going to output. With props.*/}
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
