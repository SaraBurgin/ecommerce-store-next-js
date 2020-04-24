import Layout from '../../components/Layout';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Image = styled.img`
  margin-left: 200px;
  margin-right: 50px;
  object-fit: cover;
  border-radius: 3px;
  width: 500px;
  height: 362px;
  border: 3px solid #eecc09;
`;

const Text = styled.div`
  margin-top: -20px;
  display: block;
  width: 400px;
  height: 160px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  h1 {
    font-size: 29px;
  }
  .description {
    font-size: 18px;
  }
  .price {
    background-color: #dddddd;
    width: 400px;
    font-size: 20px;
    color: #000000;
    height: 40px;
    text-align: center;
    padding-top: 10px;
    margin-top: 25px;
  }
  p .container {
    margin-top: -24px;
    margin-left: 150px;
  }
  p .inputbox {
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
  background-color: #eecc09;
  color: #ffffff;
  width: 175px;
  border-radius: 8px;
  padding: 7px;
  font-size: 21px;
  margin-left: 110px;
  margin-top: -10px;
  
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

export default function Product(props) {
  /*We create a variable to call the useRouter() function below*/
  const Router = useRouter();
  const [kilos, setKilos] = useState();

  const product = props.product;

  function handleChange(evt) {
    setKilos(evt.target.value);
  }

  function handleClick() {
    let cart;
    /* With JSON.parse we turn our cookie string in to an array and store all it's information in a new variable named cart. It is important we use this if statement because JSON.parse turns a string into an array but if there is no string it cannot turn it to an object*/
    if (Cookies.get('cart') !== undefined) {
      cart = JSON.parse(Cookies.get('cart'));
    } else {
      cart = [];
    }

    const cookieValue = [
      /* ...cart is used so that we show ALL the information that is stored in cookies, not just the last one*/
      ...cart,
      {
        id: product.id,
        kilos: kilos,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    ];
    /* Setting a cookie means to store the information you specify in your variable*/
    Cookies.set('cart', cookieValue);

    /* Router push takes you to the page you specify*/
    Router.push('/cart');
  }

  if (product === undefined) {
    return <div> Error in the system</div>;
  }
  return (
    <>
      <Layout>
        <Head />
        <Container>
          <Image src={`/images/${product.id}.jpg`}></Image>
          <Text>
            <h1>{product.name}</h1>
            <p className="description">{product.description}</p>
            <p className="price">
              {product.price}€/Kg
              <div className="container">
                <select onChange={handleChange} className="inputbox">
                  <option value="1">1kg</option>
                  <option value="2">2kg </option>
                  <option value="3">3kg </option>
                  <option value="4">4kg </option>
                  <option value="5">5kg </option>
                </select>
              </div>
            </p>
            <Button onClick={handleClick}> Add to cart</Button>
          </Text>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { getAllProducts } = await import('../../db');
  const products = await getAllProducts();
  return {
    props: {
      product: products.find((product) => product.id === Number(ctx.params.id)),
    },
  };
}

export async function getStaticPaths() {
  const { getAllProducts } = await import('../../db');
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

/*export async function getServerSideProps(ctx) {
  const cart = cookies(ctx).cart;
  return {
    props: {
      cart: cart,
    },
  };
}*/
