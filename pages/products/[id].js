import Layout from '../../components/Layout';
import Head from 'next/head';
import products from '../../db';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Image = styled.img`
  margin-left: 200px;
  margin-right: 50px;
  object-fit: cover;
  border-radius: 3px;
  width: 500px;
  height: 400px;
  border: 3px solid #eecc09;
`;

const Text = styled.div`
  margin-top: -20px;
  display: block;
  width: 400px;
  height: 180px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  h1 {
    font-size: 30px;
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
    margin-top: 35px;
  }
`;

const Button = styled.button`
  background-color: #eecc09;
  color: #ffffff;
  width: 175px;
  border-radius: 8px;
  padding: 7px;
  font-size: 22px;
  margin-left: 110px;
  margin-top: 10px;
`;

export default function Product(props) {
  return (
    <>
      <Layout>
        {props.product === undefined ? (
          'Product not found.'
        ) : (
          <>
            <div className="container">
              <Head>
                <title>{props.product.name}</title>
              </Head>
            </div>

            <Container>
              <Image src={props.product.image} alt="cheese" />
              <Text>
                <h1>{props.product.name}</h1>
                <p className="description">{props.product.description}</p>
                <p className="price">{props.product.price}</p>
                <Button>Add to cart</Button>
              </Text>
            </Container>
          </>
        )}
      </Layout>
    </>
  );
}
Product.getInitialProps = async ctx => {
  const id = ctx.query.id;
  const product = products.find(product => {
    console.log(typeof id, typeof product.id);
    return id === product.id;
  });
  return {
    product: product,
  };
};
