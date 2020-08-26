import Layout from '../components/Layout';
import cookies from 'next-cookies';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const CartIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 10px;

  .title {
    color: #737373;
    font-weight: bold;
    font-size: 35px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }

  img {
    height: 40px;
  }
  @media(max-width: 550px) {
      .title {
        font-size: 25px;
      }

      img {
        height: 30px;
      }
    }
`;

const CartInfo = styled.div`

  .total-cart {
    color: #737373;
    display: grid;
    margin-left: 100px;
    margin-right: 100px;
    grid-template-columns: 3.55fr 1.25fr 1.2fr 2.20fr 1.95fr 0.65fr; 
    grid-template-rows: auto;
    font-size: 15px;
    border-top: 2px solid #eecc09;
    border-bottom: 2px solid #eecc09;
  }
  @media(max-width: 950px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(7, 1fr);
    justify-content: center;  
    align-content: center;
    justify-items: center;
    align-items: center;
  }

  .product-name {
    grid-column: 1 / 2;
    grid-row: 1;
    margin-top: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
   
    @media(max-width: 950px) {
      margin-top: 5px;
      font-size: 21px;
      width: 500px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      justify-self: stretch;
    }

    @media(max-width: 600px) {
      margin-top: 5px;
      font-size: 13px;
      width: 200px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      justify-self: start;
    }
  }
  .cart-kilos {
    grid-column: 2 / 3;
    grid-row: 1;
    margin-top: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }

    @media(max-width: 950px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      font-size: 21px;
      justify-self: start;
      align-self: end;
    }
    @media(max-width: 600px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      font-size: 13px;
      justify-self: start;
      align-self: end;
      margin-top: 0px;
    }
  }
  div {
    grid-column: 3 / 4;
    grid-row: 1;
    align-self: center;

    @media(max-width: 1440px) {
    margin-left: -40px;
    }

    @media(max-width: 1250px) {
    margin-left: -8px;
    }

    @media(max-width: 950px) {
      grid-column: 1;
      grid-row: 2 / 3;
      font-size: 13px;
      justify-self: center;
      align-self: start;
      margin-left: -200px;
      margin-top: 17px;
      .up {
        font-size: 7px;
      }
      .down {
        font-size: 7px;
      }
    }
    @media(max-width: 600px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      font-size: 13px;
      justify-self: center;
      align-self: start;
      margin-left: -35px;
      margin-top: -3px;
      .up {
        font-size: 7px;
      }
      .down {
        font-size: 7px;
      }
    }
    .up {
      color: #eecc09;
      border: 2px solid #eecc09;
      border-radius: 3px;
      font-size: 13px;
      font-weight: bolder;

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
  .product-price {
    grid-column: 4 / 5;
    grid-row: 1;
    margin-top: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
    @media(max-width: 950px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      font-size: 21px;
      width: 300px;
      justify-self: start;
    }
    @media(max-width: 600px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      font-size: 13px;
      width: 250px;
      margin-top: 0px;
      justify-self: start;
    }
  }
  .total-price {
    grid-column: 5 / 6;
    grid-row: 1;
    margin-top: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    span {
      font-weight: bold;
    }
    @media(max-width: 950px) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      font-size: 21px;
      justify-self: start;
    }
    @media(max-width: 600px) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      font-size: 13px;
      justify-self: start;
      margin-top: 0;
    }
  }
  .delete-article-btn {
    grid-column: 6 / 7;
    grid-row: 1;
    align-self: center;
    color: #ffffff;
    height: 35px;
    width: 85px;
    background-color: #eecc09;
    border: solid 2px #737373;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: #ffffff;
      color: #eecc09;
      border: solid 2px #eecc09;
    }
    :focus {
      outline-color: #ffffff;
    }
    p {
      color: #ffffff;
      font-size: 18px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      :hover {
        color: #eecc09;
      }
    }
    @media(max-width: 600px) {
        grid-column: 1/ 2;
        grid-row: 5 / 6;
        height: 35px;
        width: 83px;
        border-radius: 5px;
        justify-self: center;
        align-self: start;
        margin-bottom: 5px;
        p {
          font-size: 19px;
        }
      }
    @media(max-width: 950px) {
        grid-column: 1/ 2;
        grid-row: 5 / 6;
        height: 35px;
        width: 83px;
        border-radius: 5px;
        justify-self: start;
        align-self: start;
        margin-bottom: 5px;
        p {
          font-size: 19px;
        }
      }
  }
`;
const TotalSum = styled.p`
    display: grid;
    margin-top: 10px;
    grid-template-columns: 1fr;
    width: 90vw;
    justify-items: end;
    font-size: 20px;
    color: #737373;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
      @media(max-width: 800px) {
        font-size: 17px;
      }
`
const ButtonContainer = styled.div`
  text-align: center;
    .continue-2-payment {
      background-color: #eecc09;
      color: #ffffff;
      width: 150px;
      height: 50px;
      border: 2px solid #737373;
      border-radius: 8px;
      padding: 7px;
      font-size: 21px;
        :hover {
          background-color: #ffffff;
          color: #eecc09;
          border: 2px solid #eecc09;
        }
        :focus {
          outline-color: #ffffff;
        }
    }
`
    
    

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
          <p className="title">Your shopping cart <img alt="shopping-cart" src="/images/cart.png" /> </p>
        </CartIntro>
        <CartInfo >
          {/* We use the cart map to map over our cart and return the specific cartValues that we wanted*/}
          {/* This is where we first make index available */}
          {cart.map(function (cartValue, index) {
            return (
              <>
                <div className="total-cart" key={cartValue.id}>
                  <p className="product-name">
                    <span>Product: </span> {cartValue.name}
                  </p>
                  <p className="cart-kilos">
                    <span>Kgs: </span>
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
                  <p className="product-price">
                    <span>Product price:</span> {cartValue.price}€
                  </p>
                  <p className="total-price">
                    <span>Total price: </span>
                    {`${cartValue.kilos * cartValue.price} € `}
                  </p>
                  {/*We need to pass index (that is the position of our deletedArticle) to the function to be able to make it available and compare to our new filtered index*/}
                  <button className="delete-article-btn" onClick={() => deleteArticle(index)}>
                    {' '}
                    <p>Delete</p>
                  </button>
                </div>
              </>
            );
          })}
        </CartInfo>
        <TotalSum>
             {/* 3. Show the variable */}
            <p className="total-sum">
                    Total sum: {sumTotals}€
            </p>
        </TotalSum>
        <ButtonContainer>
          <button className="continue-2-payment" onClick={payNow}>
            <p>Continue</p>
            </button>
        </ButtonContainer>
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
