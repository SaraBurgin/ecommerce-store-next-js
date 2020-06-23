import styled from 'styled-components';
import Link from 'next/link';
import ReactDOM from "react-dom";

const Modal = styled.div`
  display: grid;
  background: hsla(50, 100%, 50%, 0.7);
  position: fixed;
  height: 100vh;
  width: 20vw;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  /* transition: opacity 0.2s; */

  .active {
    opacity: 1;
    pointer-events: all;
  }
`
const Button = styled.button `
  width: 40px;
  background: none;
  display: inline-block;
  border: none;
  margin-left: 920px;
  margin-top: -200px;
`

const CollapsedMenu = () => {

  function handleClick() {
    const modal = document.getElementById('container');
    console.log(modal);
    modal.classList.add('active');
  }

  return (
    <>
    <Modal id="container">
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
            </Modal>
            <Button onClick={handleClick}>
            <img width="30px" className="menu" src="images/menu.png" alt="menuicon" />
            </Button>
          </>
          )
}

export default CollapsedMenu;