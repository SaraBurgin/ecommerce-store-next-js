import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 1fr 3fr;
  font-family: 'American Typewriter', 'serif';
  justify-items: center;
  margin: 10px;
  h1 {
    color: #eecc09;
  }
  h2 {
  font-size: 25px;
  padding: 10px;
  margin-bottom: 20px;
  justify-self: center;
  }
  ul {
    p {
      font-weight: bold;
      font-size: 20px;
    }
  }
  @media(max-width: 900px) {
    margin-top: 30px;
    h1 {
      font-size: 22px;
      align-self: end;
    }

    h2 {
      font-size: 20px;
      justify-self: center;
      width: 80vw;
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
        <ul><p>Contact details</p>
          <li><span>Telephone:</span> +34 934 784 619</li>
          <li><span>E-mail:</span><a href="info@cheeseit.com"> info@cheeseit.com</a></li>
        </ul>
      </Container>
    </Layout>
  </>
);

export default Contact;
