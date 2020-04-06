import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';
import Product from './products/[id]';

const CartIntro = styled.p`
  margin-top: 50px;
  color: #737373;
  font-weight: bold;
  font-size: 35px;
  margin-left: 325px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const CartInfo = styled.div`
  display: grid;
  grid-template-columns: 350px 200px 200px;
  border-top: 2px solid #eecc09;
  border-bottom: 2px solid #eecc09;
  width: 700px;
  margin-left: 325px;
  color: #737373;

  .cartName {
    margin-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }

  .cartKilos {
    margin-left: 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }

  .cartMultiply {
    width: 135px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }
`;

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
        <CartIntro>
          <p>Your shopping cart</p>
        </CartIntro>
        <CartInfo>
          <p className="cartName">
            <span>Product: </span>
            {cart.name}
          </p>
          <p className="cartKilos">
            <span>Kilos: </span>
            {cart.kilos} /kgs{' '}
          </p>
          <p className="cartMultiply">
            <span>Total price: </span>
            {`${cart.price * cart.kilos} € `}
          </p>
        </CartInfo>
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
