import styled from 'styled-components';

const FooterContainer = styled.div `
display: grid;
margin-left: 20px;
margin-right: 20px;
grid-template-columns: 1fr;
grid-template-rows: auto;
border-top: 4px solid #eecc09;
border-bottom: 4px solid #eecc09;

.instagram-pic {
  margin-top: -22px;
  width: 20px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: center;
}

.facebook-pic {
  margin-bottom: -22px;
  width: 20px;
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: center;
}

.cheese-pic {
  width: 120px;
  grid-column: 1;
  grid-row: 1 / 2; 
  align-self: center; 
  justify-self: center;
}

h2 {
  grid-column: 1;
  grid-row: 1; 
  font-family: 'American Typewriter', 'serif';
  font-size: 13px;
  margin-right: 10px;
  color: #737373;
  justify-self: end;
  align-self: center;
  span {
    font-weight: bold;
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: 9px;
  }
} 
 `

const Footer = () => (
  <>
  <FooterContainer>
      <img className="instagram-pic" src="/images/instagram.png" alt="instagramicon" />
      <img className="facebook-pic" src="/images/facebook.png" alt="facebookicon" /> 
      <img className="cheese-pic" src="/images/logo.png" alt="cheesepic" />
      <h2>
        <span>Tlfn:</span> +34 934 784 619
        <br />
        <a href="info@cheeseit.com">info@cheeseit.com</a>
        <br />
        Markgraf Strasse, 59
        <br />
        <span>Wien</span>
      </h2>
    </FooterContainer>
  </>
);

export default Footer;
