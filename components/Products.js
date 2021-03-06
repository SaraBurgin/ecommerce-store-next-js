import Link from 'next/link';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ProductPPT = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  h1 {
    font-family: 'American Typewriter', 'serif';
    font-size: 60px;
    font-weight: bold;
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: start;
    
  }
  h1 span {
    color: #eecc09;
  }
  p {
    font-family: 'American Typewriter', 'serif';
    font-size: 30px;
    grid-column: 1;
    grid-row: 2;
  }
  @media (max-width: 990px) {
    h1 {
      font-size: 45px;
      text-align: center;
    }
  }
`;

const ProductSelection = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      margin: 10px;
      column-gap: 20px;

    .wrapper-div {
      display: grid; 
      row-gap: 5px;
      border: 4px solid #eecc09;
      border-radius: 5px;
    }
    img {
      width: 452px;
      height: 225px;
      object-fit: cover;
      border-radius: 2px;
      justify-self: center;
    }
    .name {
      text-align: center;
      font-family: 'American Typewriter', 'serif';
      margin-top: 5px;
      margin-bottom: 2px;
      font-size: 27px;
      font-weight: bold;
    }
    
    .description {
      font-family: 'American Typewriter', 'serif';
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      padding: 5px;
      height: 170px;
      margin-bottom: 35px;
    }
    .price-and-input{
      display: grid;
      width: 220px;
      height: 50px;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 30px;
      justify-self: center;
      border: 2px solid #eecc09;
      border-radius: 5px;
      padding: 10px;
      margin-top: 15px;
    }
    .price {
      font-family: 'American Typewriter', 'serif';
      color: #000000;
      margin-top: -3px;
      font-size: 20px;
    }
    .input-box {
      font-family: 'American Typewriter', 'serif';
      color: #eecc09;
      font-size: 13px;
      height: 25px;
      border: 2px solid;
      border-radius: 5px;
      :focus {
        outline-color: #eecc09;
      }
    }
    .buttons {
      display: grid;
      justify-self: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      column-gap: 5px;
      margin-bottom: 10px;
    }
    .read-more-button{
      width: 130px;
      text-decoration: none;
      background: none;
      border: 2px solid #dddddd;
      border-radius: 8px;
      background-color: #eecc09;
      padding: 7px;
      font-size: 17px;
      color: #ffffff;
      font-family: 'American Typewriter', 'serif';
        cursor: pointer;
        :hover {
          background-color: #ffffff;
          color: #eecc09;
          border: 2px solid #eecc09;
        }
        :focus {
          outline-color: #ffffff;
        }
      }
      .add-to-cart-button {
        width: 130px;
        text-decoration: none;
        background: none;
        border: 2px solid #dddddd;
        border-radius: 8px;
        background-color: #eecc09;
        padding: 7px;
        font-size: 17px;
        color: #ffffff;
        font-family: 'American Typewriter', 'serif';
          cursor: pointer;
          :hover {
            background-color: #ffffff;
            color: #eecc09;
            border: 2px solid #eecc09;
          }
          :focus {
            outline-color: #ffffff;
          }
          }
          @media(max-width: 1430px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 5px;
            column-gap: 20px;
            justify-items: center;

            .wrapper-div {
              width: 455px;
              display: grid; 
              row-gap: 5px;
              border: 4px solid #eecc09;
              border-radius: 5px;
            }
          img {
            width: 447px;
            }
          }
          @media(max-width: 960px){
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 5px;
            column-gap: 20px;
            justify-items: center;

            .wrapper-div {
              width: 455px;
              display: grid; 
              row-gap: 5px;
              border: 4px solid #eecc09;
              border-radius: 5px;
          }
          }
          @media(max-width: 770px) {
              .wrapper-div {
                width: 350px
                }

              img {
                width: 342px;
                height: 225px;
                object-fit: cover;
                border-radius: 2px;
              }
          }
`;

export default function Products(props) {
  const [kilos, setKilos] = useState(1);
  const Router = useRouter();
  const products = props.products;

  function handleChange(evt) {
    setKilos(parseInt(evt.target.value));
  }

  function handleClick(product) {
    let cart = [];

    /* With JSON.parse we turn our cookie string in to an array and store all it's information in a new variable named cart. It is important we use this if statement because JSON.parse turns a string into an object (array) but if there is no string it cannot do it */
    if (Cookies.get('cart') !== undefined) {
      cart = JSON.parse(Cookies.get('cart'));
    }
    /* Here a varible is created to store the unique value that will be returned from our find function. Find returns the first value that complies with our stated condition product id === p id*/
    const equalProduct = cart.find((p) => product.id === p.id);

    /* With our if statement we say, if equalProduct is true, execute the following. With new kilos we update the kilos already in cart to add to the existing ones and with newProduct we display all properties and values in equalProduct and update kilos to the newKilos amount*/
    if (equalProduct) {
      var newKilos = equalProduct.kilos + kilos;
      var newProduct = {
        ...equalProduct,
        kilos: newKilos,
      };
      /* In newCart we are saying: get the old cart, filter through it and return all elements in which the id is NOT equal to newProduct.id, and then we add newProduct. */
      const newCart = [
        ...cart.filter((p) => p.id !== newProduct.id),
        newProduct,
      ];
      /* ...cart is used so that we show ALL the information that is stored in cookies, not just the last one*/
      /* Setting a cookie means to store the information you specify in your variable*/
      Cookies.set('cart', newCart);
      Router.push('/cart');
      /* Router push takes you to the page you specify*/
    } else {
      const cookieValue = [
        ...cart,
        {
          id: product.id,
          kilos: kilos,
          name: product.name,
          price: product.price,
          image: product.image,
        },
      ];
      Cookies.set('cart', cookieValue);
      Router.push('/cart');
    }
  }

  if (products === undefined) {
    return <div>Error in the system</div>;
  }

  return (
    <>
    <div className="container">
      <ProductPPT>
          <h1>
            You can <span>select</span> and <span>buy </span>from our{' '}
            <span>cheese</span> display.
          </h1>
          <p>Here are the real deal 3 best cheeses of 2019!</p>
      </ProductPPT>
      </div>
      <a href="products" id="products" />
      <ProductSelection>
        {products.map((product, index) => (
          <div key={product.id} className="wrapper-div">
            <img src={`/images/${product.id}.jpg`} alt=""/>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <div className="price-and-input">
                <p className="price">{product.price}€/ Kg</p>
                <select onChange={handleChange} className="input-box">
                  <option value="1">1kg</option>
                  <option value="2">2kg </option>
                  <option value="3">3kg </option>
                  <option value="4">4kg </option>
                  <option value="5">5kg </option>
                </select>
            </div>
            <div className="buttons">
              <Link href={`/products/${product.id}`}>
                <button className="read-more-button">Read More</button>
              </Link>
              {/*In order to use props in my handleClick function without it being called before onClick, I have put my function call in another function */}
              <button
                onClick={() => handleClick(product, index)}
                className="add-to-cart-button"
              >
                Add To cart
              </button>
            </div>
          </div>
        ))}
      </ProductSelection>
    </>
  );
}
