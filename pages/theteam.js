import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 600px;
  height: 300px;
  object-fit: cover;
  margin-left: 150px;
  border-radius: 5px;
  margin-top: 23px;
`;

const Presentation = styled.p`
  padding: 10px;
  font-size: 23.5px;
  margin-left: 20px;
  border-radius: 5px;
  height: 275px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  width: 500px;
`;

const Theteam = () => (
  <>
    <Layout>
      <Head>
        <title>The team</title>
      </Head>

      <Container>
        <Image src="/images/team.jpg" />
        <Presentation>
          {' '}
          Hi there! <br />
          <br />
          We are Peter and Rachel, two individuals with a passion for
          gastronomy, travels and culture.
          <br />
          <br />
          We are here to make the best cheeses of the world accesible to you.{' '}
          <br />
          <br />
          Always updating, always changing!! <br /> <br />{' '}
        </Presentation>
      </Container>
    </Layout>
  </>
);

export default Theteam;
