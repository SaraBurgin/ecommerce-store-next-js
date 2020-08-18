import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-items: center;
  padding: 10px;
  grid-gap: 10px;
  @media(max-width: 1050px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
  @media(max-width: 550px) {
   margin-top: 10px;
   padding: 0px;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
  @media(max-width: 1050px) {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
  }
  @media(max-width: 550px) {
    width: 365px;
    height: 600px;
    object-fit: cover;
  }
`;

const Presentation = styled.p`
  width: 500px;
  padding: 20px;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'American Typewriter', 'serif';
  color: white;
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
  @media(max-width: 1050px) {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
  }
  @media(max-width: 550px) {
    width: 365px;
    font-size: 17px;
  }
`;

const Image2 = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
  grid-column: 2;
  grid-row: 1 / 2;
  justify-self: start;
  @media(max-width: 1050px) {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
  }
  @media(max-width: 550px) {
    width: 365px;
    height: 400px;
    object-fit: cover;
  }
`;

const Presentation2 = styled.p`
  width: 500px;
  padding: 15px;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'American Typewriter', 'serif';
  color: white;
  grid-column: 2;
  grid-row: 1;
  justify-self: start;
  @media(max-width: 1050px) {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
  }
  @media(max-width: 550px) {
    width: 365px;
    font-size: 17px;
    align-self: end;
  }
`;

const Theteam = () => (
  <>
    <Layout>
      <Head>
        <title>The team</title>
      </Head>
      <Container>
        <Image src="/images/the-team.jpg" />
        <Presentation>
          {' '}
          Hi there! <br />
          We are Peter and Rachel, two individuals with a passion for
          gastronomy, travels and culture.
          <br />
          We are here to make the best cheeses of the world accesible to you.{' '}
          <br />

          Always updating, always changing!! <br /> <br />{' '}
        </Presentation>
        <Image2 src="/images/the-team2.jpg"></Image2>
        <Presentation2>
          And this is: Amy, Chloe and Ramita. They are in charge of Logistics, Marketing and New Business. They help our crazy dreams and adventures come true. 
        </Presentation2>
      </Container>
    </Layout>
  </>
);

export default Theteam;
