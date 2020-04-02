import Layout from '../components/Layout';
import cookies from 'next-cookies';

export default function Cart(props) {
  // Cookies.getJSON(cookieValue); //Not use this one, include Next cookies to read it on the server side. Using getServerSideProps
  const cart = props.cart;

  if (typeof cart === 'undefined') {
    return <div> Error in the system</div>;
  }
  console.log(cart);

  return (
    <>
      <Layout>
        <div>
          <p>{cart.name}</p>
          <p>{cart.kilos}</p>
          <p>{`${cart.price * cart.kilos} € `}</p>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const cart = cookies(ctx).cart;
  return {
    props: {
      cart: cart,
    },
  };
}
