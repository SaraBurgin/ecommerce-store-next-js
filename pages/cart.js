import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';
import Cookies from 'js-cookie';

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
  grid-template-columns: 350px 200px 200px 40px;
  border-top: 2px solid #eecc09;
  border-bottom: 2px solid #eecc09;
  width: 800px;
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

const Delete = styled.button`
  border-color: #ffffff;
  text-decoration: none;
  background-color: #ffffff;
  color: #ffffff;
  .x {
    background-color: #eecc09;
    border-radius: 7px;
    padding: 10px;
    color: #737373;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
`;

export default function Cart(props) {
  /* Here we assing the value of props.cart to a new variable*/
  const cart = props.cart;

  function deleteArticle(index) {
    /*Go through the products in my cart array and filter by index the one I want to delete*/
    const newCart = cart.filter(function (cartValue, cartValueIndex) {
      /*We need cartValue even though we don't use it because of the position of parameters */

      /*When we return false this means it will no longer be in the array. This is where we compare our index from deletedItem to our filtered Item */
      if (index === cartValueIndex) {
        return false;
      } else {
        return true;
      }
    });
    /*Delete our filtered item from our cookies with Cookies.set*/
    Cookies.set('cart', newCart);
    window.location.reload();
  }

  return (
    <>
      <Layout>
        <CartIntro>
          <p>Your shopping cart</p>
        </CartIntro>
        <CartInfo>
          {/* We use the cart map to map over our cart and return the specific cartValues that we wanted*/}
          {/* This is where we first make index available */}
          {cart.map(function (cartValue, index) {
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
                <Delete>
                  {/*We need to pass index (that is the position of our deletedArticle) to the function to be able to make it available and compare to our new filtered index*/}
                  <button className="x" onClick={() => deleteArticle(index)}>
                    {' '}
                    x{' '}
                  </button>
                </Delete>
              </>
            );
          })}
        </CartInfo>
      </Layout>
    </>
  );
}
/*1. so with getServerSideProps we make available the context of cart
2. we create a new variable named cart with the information from my cart and also the cookies context
3. we show the information*/

export async function getServerSideProps(ctx) {
  const cart = cookies(ctx).cart;
  if (cart === undefined) {
    return {
      props: {
        cart: [],
      },
    };
  } else {
    return {
      props: {
        cart: cart,
      },
    };
  }
}
