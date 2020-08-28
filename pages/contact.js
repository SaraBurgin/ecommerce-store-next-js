import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 1fr 0.3fr 1fr;
  font-family: 'American Typewriter', 'serif';
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;

  h1 {
    color: #eecc09;
    font-size: 30px;
  }
  h2 {
  font-size: 25px;
  margin-bottom: 10px;
  }
    p {
      font-size: 13x;
        span {
          font-weight: bold;
        }
  }
  @media(max-width: 900px) {
    margin-top: 30px;
    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 20px;
    }
  }
`

const Contact = () => (
  <>
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <Container>
        <h1>We can't cheese it without you!</h1>
        <h2>So please, if you have any questions, recommendations or sweet things you would like to say to us... BRING IT ON!</h2>
        <h1>Contact details</h1>
        <p>
          <span>Telephone:</span> +34 934 784 619<br/>
          <span>E-mail:</span><a href="info@cheeseit.com"> info@cheeseit.com</a>
        </p>
      </Container>
    </Layout>
  </>
);

export default Contact;
