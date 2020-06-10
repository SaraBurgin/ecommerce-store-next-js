import Link from 'next/link';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ProductPPT = styled.div`
@media (max-width: 1440px) {
  h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-left: 20px;
    margin-top: 50px;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
  h1 span {
    color: #eecc09;
  }
  p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-left: 370px;
    margin-top: 40px;
    font-size: 30px;
  }
}
`;

const ProductSelection = styled.div`
  display: inline-flex;
  direction: row;
  .first-div {
    border: 4px solid #eecc09;
    border-radius: 5px;
    margin-left: 50px;
    margin-top: 6px;
    width: 400px;
    height: 635px;
  }
  img {
    width: 400px;
    height: 225px;
    object-fit: cover;
    margin-bottom: 15px;
    align-items: center;
    border-radius: 2px;
  }
  .name {
    text-align: center;
    margin-top: 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
    font-size: 27px;
    font-weight: bold;
  }
  
  .description {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
    font-size: 17px;
    height: 135px;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    padding: 5px;
  }
`;

const Price = styled.div`
  display: grid;
  grid-template-columns: 100px 50px;
  border: 2px solid #eecc09;
  width: 200px;
  border-radius: 5px;
  margin-left: 85px;
  margin-right: 2.5px;
  margin-top: 55px;
  margin-bottom: 15px;
  height: 40px;
  padding: 10px;
  align-items: stretch;

  .price {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    color: #000000;
    font-size: 20px;
    margin-left: 50px;
    margin-top: 7px;
    width: 150px;
  }
  .inputbox {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    color: #eecc09;
    font-size: 13px;
    width: 55px;
    height: 30px;
    border: 2px solid;
    border-radius: 5px;
    margin-left: 30px;
    margin-top: 5px;
    :focus {
      outline-color: #eecc09;
    }
  }
`;

const Button = styled.button`
  margin-left: 35px;
  margin-bottom: 10px;
  text-decoration: none;
  background: none;
  border: none;
  border-radius: 8px;
  width: 150px;
  background-color: #eecc09;
  padding: 7px;
  font-size: 17px;
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  cursor: pointer;
  :hover {
    background-color: #ffffff;
    color: #eecc09;
    border: 2px solid #eecc09;
  }
  :focus {
    outline-color: #ffffff;
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
      <ProductPPT>
        <h1>
          You can <span>select</span> and <span>buy </span>from our{' '}
          <span>cheese</span> display.
        </h1>
        <p>Here are the real deal 3 best cheeses of 2019!</p>
      </ProductPPT>
      <ProductSelection>
        <a href="products" id="products" />
        {props.products.map((product, index) => (
          <div key={product.id} className="first-div">
            <img src={`/images/${product.id}.jpg`} alt=""/>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <Price>
                <p className="price">{product.price}€/ Kg</p>
                <select onChange={handleChange} className="inputbox">
                  <option value="1">1kg</option>
                  <option value="2">2kg </option>
                  <option value="3">3kg </option>
                  <option value="4">4kg </option>
                  <option value="5">5kg </option>
                </select>
            </Price>
            <Link href={`/products/${product.id}`}>
              <Button className="readMoreButton">Read More</Button>
            </Link>
            {/*In order to use props in my handleClick function without it being called before onClick, I have put my function call in another function */}
            <Button
              onClick={() => handleClick(product, index)}
              className="addToCart"
            >
              Add To cart
            </Button>
          </div>
        ))}
      </ProductSelection>
    </>
  );
}
