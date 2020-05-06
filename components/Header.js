import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';

const Logo = styled.div`
  img {
    display: center;
    margin-left: 605px;
    width: 200px;
  }
`;

const BreakLine = styled.div`
  hr {
    width: 820px;
    height: 0.2em;
    background-color: #737373;
    margin-right: 280px;
  }
`;

const Navigation = styled.a`
  ul {
    display: flex;
    background: #fff;
    list-style: none;
    justify-content: center;
    margin-right: -100px;
  }
  ul li {
    font-size: 19px;
    margin-right: 120px;
  }
  ul li a {
    color: #737373;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
  .home {
    ::after {
      content: '';
      display: center;
      background-color: #eecc09;
      height: 3px;
      margin-top: 7px;
      width: 0;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    :hover::after {
      width: 100%;
    }
  }
  .productsNav {
    ::after {
      content: '';
      display: center;
      background-color: #eecc09;
      height: 3px;
      margin-top: 7px;
      width: 0;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    :hover::after {
      width: 100%;
    }
  }
  .theTeam {
    ::after {
      content: '';
      display: center;
      background-color: #eecc09;
      height: 3px;
      margin-top: 7px;
      width: 0;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    :hover::after {
      width: 100%;
    }
  }
  .contact {
    ::after {
      content: '';
      display: center;
      background-color: #eecc09;
      height: 3px;
      margin-top: 7px;
      width: 0;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    :hover::after {
      width: 100%;
    }
  }
`;

const CartBubble = styled.div`
  display: grid;
  grid-template-columns: 20px 5px 5px 5px;
  grid-gap: 2px;
  margin-left: 1250px;

  .zero {
    width: 30px;
    margin-top: -170px;
    margin-left: 100px;
  }
  .one {
    color: #737373;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: -140px;
    margin-left: 60px;
  }
  .two {
    color: #737373;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: -153px;
    margin-left: 59px;
  }
  .three {
    color: #737373;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: -140px;
    margin-left: 60px;
  }
`;

const Header = () => {
  /* Create a variable for the information inside of Cookies 'cart' & define a variable that we will use later for cartLength*/
  const cookie = Cookies.get('cart');
  let bubble = null;

  /* If cookie is not undefined then create a new variable cart with the parsed (turned into object) information from cookie (that includes our cart information) & then set cartLength the actual length of the cart*/
  if (cookie !== undefined) {
    const cart = JSON.parse(cookie);
    const cartLength = cart.length;

    /* Here we are modifying cartBubble to include our cartLength variable and making it available outside of our if function */
    bubble = <p className="cart-length">{`${cartLength}`}</p>;
  } else {
    0;
  }

  return (
    <>
      <Logo>
        <Link href="/">
          <img src="/images/logo.png" alt="cheesepic" />
        </Link>
      </Logo>
      <CartBubble>
        <Link href="../../cart">
          <img className="zero" src="/images/cart.png" alt="cartpic" />
        </Link>
        <p className="one">(</p>
        <p className="two">{bubble}</p>
        <p className="three">)</p>
      </CartBubble>
      <main>
        <BreakLine>
          <hr></hr>
        </BreakLine>
        <Navigation>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a className="home">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#products">
                  <a className="productsNav">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/theteam">
                  <a className="theTeam">The team</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="contact">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </Navigation>
      </main>
    </>
  );
};

export default Header;
