import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';

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

const Length = styled.p``;

export default function Cart(props) {
  /* Here we assing the value of props.cart to a new variable*/
  const cart = props.cart;
  const cartLength = cart.length;

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
          {/* We use the cart map to map over our cart and return the specific cartValues that we wanted*/}
          {cart.map(function (cartValue) {
            return (
              <>
                <p className="cartName">
                  <span>Product: </span> {cartValue.name}
                </p>
                <p className="cartKilos">
                  <span>Kilos: </span>
                  {cartValue.kilos} /kgs{' '}
                </p>
                <p className="cartMultiply">
                  <span>Total price: </span>
                  {`${cartValue.price * cartValue.kilos} € `} Vat Incl
                </p>
              </>
            );
          })}
        </CartInfo>
        <Length> {cartLength} </Length>
      </Layout>
    </>
  );
}
/*1. so with getServerSideProps we make available the context of cart
2. we create a new variable named cart with the information from my cart and also the cookies context
3. we show the information*/

export async function getServerSideProps(ctx) {
  const cart = cookies(ctx).cart;
  return {
    props: {
      cart: cart,
    },
  };
}
