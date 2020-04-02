import Layout from '../components/Layout';

export default function Cart(props) {
  // Cookies.getJSON(cookieValue); //Not use this one, include Next cookies to read it on the server side. Using getServerSideProps
  const cart = props.cart;
  if (typeof cart === 'undefined') {
    return <div> Error in the system</div>;
  }
  console.log(cart);

  return (
    <>
      <Layout>This is my shopping cart.</Layout>
    </>
  );
}
