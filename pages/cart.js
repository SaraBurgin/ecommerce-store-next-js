import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const CartIntro = styled.div`
  margin-top: 50px;
  margin-left: 300px;
  margin-bottom: 30px;
  width: 375px;
  .title {
    color: #737373;
    font-weight: bold;
    font-size: 35px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    border-bottom: 2px solid #737373;
    padding-bottom: 3px;
    width: 310px;
  }
`;

const CartInfo = styled.div`
  .totalCart {
    display: grid;
    grid-template-columns: 295px 125px 70px 180px 175px 40px;
    height: 50px;
    border-top: 2px solid #eecc09;
    border-bottom: 2px solid #eecc09;
    width: 875px;
    margin-left: 300px;
    color: #737373;
  }
  .cartName {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }
  .cartKilos {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
  }
  div {
    display: grid;
    grid-template-rows: 20px 20px;
    grid-gap: 2px;
    width: 45px;
    height: 20px;
    margin-top: 4.5px;
    margin-left: -22px;

    .up {
      color: #eecc09;
      border: 2px solid #eecc09;
      border-radius: 3px;
      font-size: 13px;
      font-weight: bolder;
      margin-top: -2px;
      margin-bottom: 1px;
      :focus {
        outline-color: #ffffff;
      }
      :hover {
        background-color: #eecc09;
        border: solid 2px #737373;
        color: #ffffff;
      }
    }
    .down {
      color: #eecc09;
      border: 2px solid #eecc09;
      border-radius: 3px;
      font-size: 13px;
      font-weight: bold;
      margin-top: -1px;
      :focus {
        outline-color: #ffffff;
      }
      :hover {
        background-color: #eecc09;
        border: solid 2px #737373;
        color: #ffffff;
      }
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
    margin-left: -10px;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    color: #ffffff;
    background-color: #eecc09;
    border: solid 2px #737373;
    border-radius: 7px;
    cursor: pointer;
    :hover {
      background-color: #ffffff;
      border: solid 2px #eecc09;
    }
    :focus {
      outline-color: #ffffff;
    }
    p {
      margin-top: 4px;
      color: #737373;
      font-weight: bold;
      font-size: 15px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      :hover {
        color: #eecc09;
      }
    }
  }
`;

const TotalPrice = styled.p`
  margin-left: 990px;
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
  border: 2px solid #737373;
  border-radius: 8px;
  padding: 7px;
  font-size: 21px;
  margin-left: 635px;
  :hover {
    background-color: #ffffff;
    color: #eecc09;
    border: 2px solid #eecc09;
  }
  :focus {
    outline-color: #ffffff;
  }
  p {
    margin-top: 5px;
  }
`;

export default function Cart(props) {
  /* Here we assing the value of props.cart to a new variable*/
  const cart = props.cart;
  /*const product = props.product;*/
  const Router = useRouter();
  /*const [kilos, setKilos] = useState();*/

  if (cart === null) {
    return (
      <Layout>
        <div className="Empty">
          <h2>SHOPPING CART IS EMPTY </h2>
          <p>Your shopping cart is empty</p>
          <p>
            To continue shopping please
            <Link href="/#Products">
              <a>Click here </a>
            </Link>
          </p>
        </div>
      </Layout>
    );
  }

  function handleUpClick(cartValue, index) {
    var clickedItem = cart.find(
      (cartItem, cartItemIndex) => index === cartItemIndex,
    );
  
    if (clickedItem) {
      const newKilos = clickedItem.kilos + 1;
      const newProduct = {
        ...clickedItem,
        kilos: newKilos,
      };

      const newCart = [
        newProduct,
        ...cart.filter((p) => p.id !== newProduct.id),
      ];

      Cookies.set('cart', newCart);
      window.location.reload();
    } else {
      const cookieValue = [
        ...cart,
        {
          id: cartValue.id,
          kilos: kilos,
          name: cartValue.name,
          price: cartValue.price,
          image: cartValue.image,
        },
      ];
      Cookies.set('cart', cookieValue);
    }
  }

  function handleDownClick(cartValue, index) {
    var clickedItem = cart.find(
      (cartItem, cartItemIndex) => index === cartItemIndex,
    );
    
    if (clickedItem) {
      const newKilos = clickedItem.kilos - 1;
      const newProduct = {
        ...clickedItem,
        kilos: newKilos,
      };

      const newCart = [
        newProduct, 
        ...cart.filter((p) => p.id !== newProduct.id),
      ];

      Cookies.set('cart', newCart);
      window.location.reload();
    } else {
      const cookieValue = [
        ...cart,
        {
          id: cartValue.id,
          kilos: kilos,
          name: cartValue.name,
          price: cartValue.price,
          image: cartValue.image,
        },
      ];
      Cookies.set('cart', cookieValue);
    }
  }

  function deleteArticle(index) {
    /*We use filter to go through the products in my cart array and filter by index the one I want to delete*/
    /*We need cartValue even though we don't use it because of the position of parameters */
    const newCart = cart.filter(function (cartItem, cartItemIndex) {
      /*When we return false this means it will no longer be in the array. This is where we compare our index from deletedArticle to our filtered Item */
      if (index === cartItemIndex) {
        return false;
      } else {
        return true;
      }
    });
    /*Delete our filtered item from our cookies with Cookies.set and reload the page so it is deleted*/
    Cookies.set('cart', JSON.stringify(newCart));
    window.location.reload();
    //I don´t want the order of the products to change in cart. So the id's should stay the same. 
    /* for(var i = 0; i <= 3; i++) { max = 0; imax = 0; if(mountainH >= max) {mountainH = max; imax = i;}} */
  }

  function payNow() {
    Router.push('/payment');
  }

  /* VERSION 1 */

  /*const cartTotals = cart.map(function (cartTotal) {
    return parseInt(`${cartTotal.kilos * cartTotal.price} `);
  });
  const sumTotals = cartTotals.reduce((total, currentValue) => {
    console.log(total);
    return total + currentValue;
  }, 0);*/

  /* VERSION 2 */
  /* 1. Create a variable to track the total*/
  /* 2. Go through each of the products and update the variable*/
  /* Cart reduce already does a map through our array so this version is simpler than version 1. It is required to give a total and a currentValue as parametes and also add the starting point 0 after the function. Do not reassign the parameters we have stated, create new ones and just modify the return. */

  const sumTotals = cart.reduce((total, currentValue) => {
    var newCurrentValue = currentValue.price * currentValue.kilos;

    return total + newCurrentValue;
  }, 0);

  return (
    <>
      <Layout>
        <CartIntro >
          <p className="title">Your shopping cart</p>
        </CartIntro>
        <CartInfo >
          {/* We use the cart map to map over our cart and return the specific cartValues that we wanted*/}
          {/* This is where we first make index available */}
          {cart.map(function (cartValue, index) {
            return (
              <>
                <div className="totalCart" key={cartValue.id}>
                  <p className="cartName">
                    <span>Product: </span> {cartValue.name}
                  </p>
                  <p className="cartKilos">
                    <span>Kilos: </span>
                    {cartValue.kilos} /kgs{' '}
                  </p>
                  <div>
                    <button
                      className="up"
                      onClick={() => handleUpClick(cartValue, index)}
                    >
                      ↑
                    </button>
                    <button
                      className="down"
                      onClick={() => handleDownClick(cartValue, index)}
                    >
                      ↓
                    </button>
                  </div>
                  <p className="productPrice">
                    <span>Product price:</span> {cartValue.price}€
                  </p>
                  <p className="cartMultiply">
                    <span>Total price: </span>
                    {`${cartValue.kilos * cartValue.price} € `}
                  </p>
                  {/*We need to pass index (that is the position of our deletedArticle) to the function to be able to make it available and compare to our new filtered index*/}
                  <button className="x" onClick={() => deleteArticle(index)}>
                    {' '}
                    <p>x</p>
                  </button>
                </div>
              </>
            );
          })}
          {/* 3. Show the variable */}
          <TotalPrice >
            Total sum: {sumTotals}€
          </TotalPrice>
        </CartInfo>
        <Button className="payNow" onClick={payNow}>
          <p>Continue</p>
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
