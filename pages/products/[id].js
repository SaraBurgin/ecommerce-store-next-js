import Layout from '../../components/Layout';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import React, { useState } from 'react';

const Container = styled.div`
  display: grid;
  margin-top: 30px;
  margin-bottom: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

    .product-image {
      object-fit: cover;
      border-radius: 3px;
      width: 500px;
      height: 362px;
      border: 3px solid #eecc09;
      justify-self: end;
      margin-right: 10px;
    }
    .text-description {
      width: 400px;
      margin-left: 10px;
      font-family: 'American Typewriter', 'serif';

      h1 {
        font-size: 29px;
      }
      .product-name {
        font-size: 17px;
      }

      .handleclick-btn {
        background-color: #eecc09;
        border: 2px solid #dddddd;
        color: #ffffff;
        width: 175px;
        border-radius: 8px;
        padding: 7px;
        font-size: 21px;
        justify-self: center;

        cursor: pointer;
        :hover {
          background-color: #ffffff;
          color: #eecc09;
          border: 2px solid #eecc09;
          outline-color: #ffffff;
        }
        :focus {
          outline-color: #ffffff;
        }
            }

      .price-and-input-container {
       display: grid; 
       grid-template-columns: 1fr 1fr;
       background-color: #dddddd;
       border-radius: 5px;
       margin-bottom: 15px;
       align-items: center;
       
        .price {
          font-size: 20px;
          color: #000000;
          text-align: end;
          margin-top: 12px;
          margin-right: 5px;
      }
        .inputbox {
          font-family: 'American Typewriter', 'serif';
          color: #eecc09;
          font-size: 13px;
          width: 55px;
          height: 30px;
          border-radius: 5px;
          border: 2px solid #eecc09;
        }
      }
        }

  @media(max-width: 930px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    
    .product-image {
      margin-bottom: 10px;
      justify-self: center;
      align-self: center;
      margin-right: 0px;
    }
    .text-description {
     padding: 10px;
     justify-self: center;
     align-self: center;
     margin-left: 0px;
    }
  }

  @media(max-width: 499px) {
    .product-image {
      object-fit: cover;
      border-radius: 3px;
      width: 340px;
      height: 340px;
      border: 3px solid #eecc09;
      justify-self: center;
      margin-right: 0px;

    }
    .text-description {
     padding: 10px;
     width: 340px;
     justify-self: center;
     align-self: center;
     margin-left: 0px;
    }
  }
`;


export default function Product(props) {
  /*We create a variable to call the useRouter() function below*/
  const Router = useRouter();
  const [kilos, setKilos] = useState(1);

  const product = props.product;

  function handleChange(evt) {
    /*It is important to parseInt because the value we get back from evt.target.value is a string not a number and in our function below it wouldn't be able to sum otherwise */
    setKilos(parseInt(evt.target.value));
  }

  function handleClick() {
    let cart = [];
    /* With JSON.parse we turn our cookie string in to an array and store all it's information in a new variable named cart. It is important we use this if statement because JSON.parse turns a string into an object (array) but if there is no string it cannot do it */
    if (Cookies.get('cart') !== undefined) {
      cart = JSON.parse(Cookies.get('cart'));
    }
    /* Here a varible is created to store the unique value that will be returned from our find function. Find returns the first value that complies with our stated condition product id === p id*/
    const equalProduct = cart.find((p) => product.id === p.id);

    /* With our if statement we say, if equalProduct is true, execute the following. With new kilos we update the kilos already in cart to add to the existing ones and with newProduct we display all properties and values in equalProduct and update kilos to the newKilos amount*/
    if (equalProduct) {
      const newKilos = equalProduct.kilos + kilos;
      const newProduct = {
        ...equalProduct,
        kilos: newKilos,
      };
      /* In newCart we are saying: get the old cart, filter through it and return all elements in which the id is NOT equal to newProduct.id, and then we add newProduct. */
      const newCart = [
        ...cart.filter((p) => p.id !== newProduct.id),
        newProduct,
      ];
      Cookies.set('cart', newCart);
      Router.push('/cart');
    } else {
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
  }

  if (product === undefined) {
    return <div> Error in the system</div>;
  }

  return (
    <>
      <Layout>
        <Head />
        <Container>
          <img className="product-image" src={`/images/${product.id}.jpg`} />
          <div className="text-description">
            <h1>{product.name}</h1>
            <p className="product-name">{product.description}</p>
            <div className="price-and-input-container">
                <p className="price">
                {product.price}€/Kg
                </p>
                <select onChange={handleChange} className="inputbox">
                  <option value="1">1kg</option>
                  <option value="2">2kg </option>
                  <option value="3">3kg </option>
                  <option value="4">4kg </option>
                  <option value="5">5kg </option>
                </select>
            </div>
            <button className="handleclick-btn" onClick={handleClick}> Add to cart</button>
          </div>
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
