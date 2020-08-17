import styled from 'styled-components';

const BreakLine1 = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  height: 0.25em;
  background-color: #eecc09;
  list-style: none;
  justify-items: center;
  margin: 20px;
`;

const FooterContainer = styled.div `
display: grid;
margin-left: 20px;
margin-right: 20px;
grid-template-columns: 0.07fr 0.07fr 1.6fr 1fr 1fr;
grid-template-rows: 80px;

.instagram-pic {
  width: 20px;
}
.facebook-pic {
  width: 20px;
}

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  color: #737373;
  font-size: 15px;
}

.cheese-pic {
  width: 120px; 
}

h2 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  font-size: 12px;
  color: #737373;
}

@media (max-width: 1000px) {
  grid-template-columns: 0.07fr 1.45fr 1fr 1fr;
  grid-template-rows: 80px;
  h1 {
    display: none;
  }

  .facebook-pic {
    justify-self: start;
  }
}

@media (max-width: 935px) {
  grid-template-columns: 0.07fr 1.3fr 1fr 1fr;
  grid-template-rows: 80px;
}
@media (max-width: 500px) {
  grid-template-columns: 0.07fr 1fr 1fr 1fr;
  grid-template-rows: 80px;
}
 `

const BreakLine2 = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  height: 0.25em;
  background-color: #eecc09;
  justify-items: center;
  margin-left: 20px;
  margin: 20px;
`;

const Footer = () => (
  <>
  <BreakLine1>
      <hr></hr>
  </BreakLine1>
  <FooterContainer>
      <img className="instagram-pic" src="/images/instagram.png" alt="instagramicon" />
      <img className="facebook-pic" src="/images/facebook.png" alt="facebookicon" />
      <h1>
        Follow us on social media to get all cheesy updates and recommendations!
      </h1>
      <img className="cheese-pic" src="/images/logo.png" alt="cheesepic" />
      <h2>
        <span>Tlfn: +34 934 784 619</span>
        <br />
        <span>info@cheeseit.com</span>
        <br />
        <span>Markgraf Strasse, 59</span>
        <br />
        <span>Wien</span>
      </h2>
    <hr></hr>
    </FooterContainer>
    <BreakLine2>
      <hr></hr>
  </BreakLine2>
  </>
);

export default Footer;
