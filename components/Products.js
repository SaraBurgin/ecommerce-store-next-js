import styled from 'styled-components';
import products from '../db';

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
`;

const Button = styled.button`
  background-color: #eecc09;
  color: #ffffff;
  width: 150px;
  border-radius: 8px;
  margin-left: 30px;
  margin-right: 5px;
  padding: 5px;
  font-size: 17px;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  button:active {
    text-decoration: none;
  }
`;

const Products = props => (
  <div>
    <ProductPPT>
      <h1>
        You can <span>select</span> and <span>buy </span>from our{' '}
        <span>cheese</span> display.
      </h1>
      <p>Here are the real deal 3 best cheeses of 2019!</p>
    </ProductPPT>
    <ProductSelection>
      {products.map(product => {
        return (
          <>
            <a href="products" id="products" />
            <div key={product.id}>
              <Image src={product.image} alt="cheese" />
              <Name> {product.name}</Name>
              <Description>{product.description}</Description>
              <Price>{product.price}</Price>
              <Button>Add to cart</Button>
              <Button className="readmore">
                <a href={product.url} title="Read more">
                  {' '}
                  Read more{' '}
                </a>
              </Button>
            </div>
          </>
        );
      })}
    </ProductSelection>
  </div>
);

export default Products;
