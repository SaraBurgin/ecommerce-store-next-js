import Link from 'next/link';
import styled from 'styled-components';
import React, { useState } from 'react';

const ProductPPT = styled.div`
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
`;

const ProductSelection = styled.div`
  display: inline-flex;
  direction: row;

  div {
    border: 4px solid #eecc09;
    border-radius: 5px;
    margin-left: 50px;
    margin-top: 6px;
    width: 400px;
    height: 635px;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 225px;
  object-fit: cover;
  margin-bottom: 15px;
  align-items: center;
  border-radius: 2px;
`;

const Name = styled.p`
  text-align: center;
  margin-top: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 27px;
  font-weight: bold;
`;

const Description = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
  height: 135px;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  padding: 5px;
`;

const Price = styled.p`
  margin-top: 60px;
  border-radius: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  color: #000000;
  background-color: #dddddd;
  width: 395px;
  margin-left: 2.5px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  .inputbox {
    margin-left: 25px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    color: #eecc09;
    margin-top: -500px;
    font-size: 13px;
    width: 55px;
    border: 2px solid;
  }
`;

const Button = styled.button`
  margin-left: 35px;
  margin-bottom: 10px;
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
`;

export default function Products(props) {
  const [kilos, setKilos] = useState(1);

  function handleChange(evt) {
    setKilos(evt.target.value);
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
        {props.products.map((product) => (
          <div key={product.id}>
            <Image src={`/images/${product.id}.jpg`} />
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Price>
              {product.price}€/ Kg
              <select onChange={handleChange} className="inputbox">
                <option value="1">1kg</option>
                <option value="2">2kg </option>
                <option value="3">3kg </option>
                <option value="4">4kg </option>
                <option value="5">5kg </option>
              </select>
            </Price>

            <Button href={`/products/${product.id}`} className="readMore">
              <Link href={`/products/${product.id}`}>Read More </Link>
            </Button>
            <Button className="addToCart">Add To cart</Button>
          </div>
        ))}
      </ProductSelection>
    </>
  );
}
