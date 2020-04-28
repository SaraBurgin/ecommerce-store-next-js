import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';

const Thankyou = styled.div`
  color: #737373;
  width: 800px;
  margin-top: 50px;
  margin-left: 300px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  .linkType {
    text-decoration-line: none;
  }
`;

export default function ThankyouPage() {
  return (
    <>
      <Layout>
        <Thankyou>
          <div>
            <h1>THANK YOU FOR YOUR PURCHASE!</h1>
            <h2>
              We think you would probably like to track your cheese so go ahead
              and check your e-mail in a few minutes and you will find your
              tracking number together with the purchase confirmation and
              details. If you have any requests don´t hesitate to contact us.{' '}
            </h2>
            <Link className="linkType" href="/contact">
              Click here for our contact details.
            </Link>{' '}
            <p>We hope to cheese you soon!!</p>
          </div>
        </Thankyou>
      </Layout>
    </>
  );
}
