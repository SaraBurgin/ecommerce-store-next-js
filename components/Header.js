import styled from 'styled-components';
import Cookies from 'js-cookie';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Styles = styled.div`
  background-color: #d9d9d9;

  .cart {
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr;
    margin-bottom: -25px;
  .cart-pic {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
    justify-self: start;
  }
  .cart-recount {
    grid-column: 1;
    grid-row: 1;
    margin-left: 30px;
    align-self: start;
    justify-self: end;
  }
  @media(max-width: 990px) {
    .cart-pic {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
    justify-self: start;
  }
  .cart-recount {
    grid-column: 1;
    grid-row: 1;
    margin-left: 30px;
    align-self: start;
    justify-self: start;
  }
  }
    }
`;

const Header = () => {
  /* Create a variable for the information inside of Cookies 'cart' that we will later use for cartLength*/
  const cookie = Cookies.get('cart');
  let bubble = 0;
  /* If cookie is not undefined then create a new variable cart with the parsed (turned into object) information from cookie (that includes our cart information) & then set cartLength to the actual length of the cart */
  if (cookie !== undefined) {
    const cart = JSON.parse(cookie);
    const cartLength = cart.length;
    /* Here we are modifying bubble to include our cartLength variable and making it available outside of our if function as a string (via using `${}`*/
  bubble = <p className="basket-units">({`${cartLength}`})</p>;
  } else {
  }
  return (
    <>
    <Styles>
        <Navbar variant="light" expand="lg">
          <Navbar.Brand href="/">
            <img src="/images/just-cheese2.png" width="65" className="d-inline-block align-top" alt="Cheese it logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto list">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#products">Products</Nav.Link>
              <Nav.Link href="/theteam">The Team</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="../../cart" className="cart">
                  <img className="cart-pic" src="/images/cart.png" alt="cartpic" width="30px" />
                  <p className="cart-recount">{bubble}</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Styles>
    </>
  );
};

export default Header;
