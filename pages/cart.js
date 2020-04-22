import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

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
  .totalCart {
    display: grid;
    grid-template-columns: 300px 150px 190px 190px 40px;
    border-top: 2px solid #eecc09;
    border-bottom: 2px solid #eecc09;
    width: 900px;
    margin-left: 325px;
    color: #737373;
  }
  .cartName {
    margin-right: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }

  .cartKilos {
    margin-right: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }
  .productPrice {
    margin-right: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }

  .cartMultiply {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }
  .x {
    align-self: center;
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    color: #ffffff;
    background-color: #eecc09;
    border-radius: 7px;
    p {
      margin-top: 4px;
      color: #737373;
      font-weight: bold;
      font-size: 15px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
  }
`;

const TotalPrice = styled.p`
  margin-left: 1000px;
  font-weight: bold;
  font-size: 20px;
  color: #737373;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Button = styled.button`
  background-color: #eecc09;
  color: #ffffff;
  width: 150px;
  height: 50px;
  border-radius: 8px;
  padding: 7px;
  font-size: 21px;
  margin-left: 630px;
  p {
    margin-top: 5px;
  }
`;

export default function Cart(props) {
  /* Here we assing the value of props.cart to a new variable*/
  const cart = props.cart;
  const Router = useRouter();

  function deleteArticle(index) {
    /*We use filter to go through the products in my cart array and filter by index the one I want to delete*/
    /*We need cartValue even though we don't use it because of the position of parameters */
    const newCart = cart.filter(function (cartValue, cartValueIndex) {
      /*When we return false this means it will no longer be in the array. This is where we compare our index from deletedArticle to our filtered Item */
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

  function payNow() {
    Router.push('/payment');
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
            var itemTotal = cartValue.price * cartValue.kilos;
            var price = cartValue.price;
            /*
            price.forEach(function updateCartTotal(price, index) {
              for (var i = 0; i < cart.length; i++) {
                return price.index + price.index++;
              }
            });
          */

            return (
              <>
                <p className="totalCart">
                  <p className="cartName">
                    <span>Product: </span> {cartValue.name}
                  </p>
                  <p className="cartKilos">
                    <span>Kilos: </span>
                    {cartValue.kilos} /kgs{' '}
                  </p>
                  <p className="productPrice">
                    <span>Product price:</span> {price}€
                  </p>
                  <p className="cartMultiply">
                    <span>Total price: </span>
                    {`${itemTotal} € `}
                  </p>
                  {/*We need to pass index (that is the position of our deletedArticle) to the function to be able to make it available and compare to our new filtered index*/}
                  <button className="x" onClick={() => deleteArticle(index)}>
                    {' '}
                    <p>x</p>
                  </button>
                </p>
              </>
            );
          })}
          <TotalPrice>
            <p>Total sum: </p>
          </TotalPrice>
        </CartInfo>
        <Button className="payNow" onClick={payNow}>
          <p>Pay Now!</p>
        </Button>
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
