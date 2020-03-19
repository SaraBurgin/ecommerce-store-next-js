import styled from 'styled-components';

const Break1 = styled.div`
  width: 1400px;
  height: 0.3em;
  margin-bottom: 60px;
  margin-left: 10px;
  margin-top: 100px;
  background-color: #eecc09;
  list-style: none;
`;
const Instagram = styled.div`
  img {
    position: absolute;
    width: 20px;
    margin-top: 5px;
    margin-left: 52px;
  }
`;
const Facebook = styled.div`
  img {
    position: absolute;
    width: 20px;
    margin-top: -20px;
    margin-left: 52px;
  }
`;
const RightContainer = styled.div`
  h1 {
    position: absolute;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    color: #737373;
    margin-left: 80px;
    margin-top: 20px;
  }
  img {
    width: 120px;
    position: absolute;
    margin-top: -37px;
    margin-left: 650px;
  }

  h2 {
    margin-left: 1250px;
    margin-top: -25px;
    margin-bottom: 25px;
    vertical-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-size: 12px;
    color: #737373;
  }
`;
const Break2 = styled.div`
  width: 1400px;
  height: 0.3em;
  background-color: #eecc09;
  margin-left: 10px;
`;

const Footer = () => (
  <>
    <Break1>
      <hr></hr>
    </Break1>
    <Instagram>
      <img src="/images/instagram.png" alt="instagramicon" />
    </Instagram>
    <Facebook>
      <img src="/images/facebook.png" alt="facebookicon" />
    </Facebook>
    <RightContainer>
      <h1>
        Follow us on social media to get all cheesy updates and recommendations!
      </h1>
      <img src="/images/logo.png" alt="cheesepic" />
      <h2>
        <span>Tlfn: +34 934 784 619</span>
        <br />
        <span>info@cheeseit.com</span>
        <br />
        <span>Markgraf Strasse, 59</span>
        <br />
        <span>Wien</span>
      </h2>
    </RightContainer>
    <Break2>
      <hr></hr>
    </Break2>
  </>
);

export default Footer;
