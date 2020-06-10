import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';

const Logo = styled.div`
@media (max-width: 1440px) {
  img {
    margin-left: 605px;
    width: 200px;
  }
}
@media (max-width: 1300px) {
  img {
    margin-left: 525px;
    width: 200px;
  }
}
@media (max-width: 1200px) {
  img {
    margin-left: 450px;
    width: 200px;
  }
}
@media (max-width: 1100px) {
  img {
    margin-left: 350px;
    width: 200px;
  }
}
@media (max-width: 1000px) {
  img {
    margin-left: 340px;
    width: 200px;
  }
}
@media (max-width: 900px) {
  img {
    margin-left: 320px;
    width: 200px;
  }
}
@media (max-width: 800px) {
  img {
    margin-left: 270px;
    width: 200px;
  }
}
@media (max-width: 700px) {
  img {
    margin-left: 240px;
    width: 200px;
  }
}
@media (max-width: 600px) {
  img {
    margin-left: 145px;
    width: 200px;
  }
}
`;

const BreakLine = styled.div`
  @media(max-width: 1440px) {
    hr {
      width: 820px;
      height: 0.2em;
      background-color: #737373;
      margin-right: 280px;
    }
}
@media(max-width: 1300px) {
    hr {
      width: 750px;
      height: 0.2em;
      background-color: #737373;
      margin-left: 250px;
    }
}
@media(max-width: 1200px) {
    hr {
      width: 720px;
      height: 0.2em;
      background-color: #737373;
      margin-right: 235px;
    }
}
@media(max-width: 1100px) {
    hr {
      width: 720px;
      height: 0.2em;
      background-color: #737373;
      margin-right: 200px;
    }
}
@media(max-width: 900px) {
    hr {
      width: 600px;
      height: 0.2em;
      background-color: #737373;
      margin-left: 150px;
    }
}
@media(max-width: 700px) {
    hr {
      width: 500px;
      height: 0.2em;
      background-color: #737373;
      margin-left: 90px;
    }
}
@media(max-width: 500px) {
    hr {
      width: 400px;
      height: 0.2em;
      background-color: #737373;
      margin-left: 35px;
    }
}
`;

const Navigation = styled.div`
  ul {
    display: flex;
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
    background-color: white;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
      :hover {
        color: #eecc09;
      }
  }
  .home {
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
      }
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
      }
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
      }
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
      }
      :hover::after {
        width: 7%;
        margin-left: 962px;
        left: 0;
      }
  }
`;

const CartBubble = styled.div`
  display: grid;
  grid-template-columns: 20px 5px 5px 5px;
  grid-gap: 2px;
  margin-left: 1250px;

  .cart-pic {
    width: 30px;
    margin-top: -170px;
    margin-left: 100px;
  }
 
  .basket-units {
    width: 50px;
    color: #737373;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: -155px;
    margin-left: 55px; 
  } 

`;

const Header = () => {
  /* Create a variable for the information inside of Cookies 'cart' that we will later use for cartLength*/
  const cookie = Cookies.get('cart');
  let bubble = null;

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
      <Logo>
        <Link href="/">
          <img src="/images/logo.png" alt="cheesepic" />
        </Link>
      </Logo>
      <CartBubble>
        <Link href="../../cart">
          <img className="cart-pic" src="/images/cart.png" alt="cartpic" />
        </Link>
        {bubble}
      </CartBubble> 
      <main>
        <BreakLine>
          <hr></hr>
        </BreakLine>
        <Navigation>
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
        </Navigation>
      </main>
    </>
  );
};

export default Header;
