import styled from 'styled-components';
import Cookies from 'js-cookie';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Styles = styled.div`
  background-color: #dadada;

  /* .home {
    ::after {
        content: '';
        position: absolute;
        background-color: #eecc09;
        height: 3px;
        margin-top: 30px;
        width: 0;
        left: 5%;
        transition: left 0.2s ease 0s;
        /* transition: width 0.3s ease 0s, left 0.3s ease 0s; */
     /* }
      :hover::after {
        width: 7%;
        margin-left: 387px;
        left: 0;
      }
  } 
  .productsNav {
    ::after {
        content: '';
        position: absolute;
        background-color: #eecc09;
        height: 3px;
        margin-top: 30px;
        width: 0;
        left: 5%;
        transition: left 0.2s ease 0s;
        /* transition: width 0.3s ease 0s, left 0.3s ease 0s; */
      /*}
      :hover::after {
        width: 7%;
        margin-left: 570px;
        left: 0;
      }
  }
  .theTeam {
    ::after {
        content: '';
        position: absolute;
        background-color: #eecc09;
        height: 3px;
        margin-top: 30px;
        width: 0;
        left: 5%;
        transition: left 0.2s ease 0s;
        /* transition: width 0.3s ease 0s, left 0.3s ease 0s; */
      /*}
      :hover::after {
        width: 7%;
        margin-left: 767px;
        left: 0;
      }
  }
  .contact {
    ::after {
        content: '';
        position: absolute;
        background-color: #eecc09;
        height: 3px;
        margin-top: 30px;
        width: 0;
        left: 5%;
        transition: left 0.2s ease 0s;
        /* transition: width 0.3s ease 0s, left 0.3s ease 0s; */
      /*}
      :hover::after {
        width: 7%;
        margin-left: 962px;
        left: 0;
      }
  } */
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
            <img src="/images/logo.png" width="125" className="d-inline-block align-top" alt="Cheese it logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#products">Products</Nav.Link>
              <Nav.Link href="/theteam">The Team</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="../../cart">
                  <img className="cart-pic" src="/images/cart.png" alt="cartpic" width="30px" />
              </Nav.Link>
              <Nav.Link href="../../cart">{bubble}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Styles>
    </>
  );
};

export default Header;
