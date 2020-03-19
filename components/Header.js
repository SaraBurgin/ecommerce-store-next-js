import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled.div`
  img {
    display: block;
    margin-left: 650px;
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
      display: block;
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
      display: block;
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
      display: block;
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
      display: block;
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
const ShoppingCart = styled.div`
  img {
    position: absolute;
    width: 30px;
    top: 20px;
    right: 25px;
  }
`;

const Header = () => (
  <>
    <main>
      <Logo>
        <img src="/images/logo.png" alt="cheesepic" />
      </Logo>
      <ShoppingCart>
        <img src="/cart.png" alt="cartpic" />
      </ShoppingCart>
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

export default Header;
