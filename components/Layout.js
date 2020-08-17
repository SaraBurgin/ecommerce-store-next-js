import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
      <Header />
      <div>
        {props.children}{' '}
        {/*Whatever page we are on this is where it is going to output. With props.*/}
      </div>
      <Footer />
  </>
);

export default Layout;
