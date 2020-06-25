import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
padding: 50px;
`

const Contact = () => (
  <>
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <Container>
      <p>Please contact us if you need further information.</p>
      </Container>
    </Layout>
  </>
);

export default Contact;
