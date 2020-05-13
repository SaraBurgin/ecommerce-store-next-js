import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';

const Thankyou = styled.div`
   color: #737373;
   width: 700px;
   margin-top: 50px;
   margin-left: 350px;
   text-align: justify;
   text-justify: inter-word;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
     h2 {
     font-size: 20px;
   }
  
  .link2contact {
    margin-top: 20px;
    color: #737373;
    text-decoration: underline;
     margin-left: 205px;
     :hover {
      color: #eecc09;
       }
   }
    p {
    margin-top:20px;
    margin-left: 200px;
    font-size: 20px;
     color: #eecc09;
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
              We think you would probably like to track your cheese order so go ahead
              and check your e-mail in a few minutes and you will find your
              tracking number together with the purchase confirmation and
              details. If you have any requests don´t hesitate to contact us.{' '}
            </h2>
            <Link href="/contact">
              <a className="link2contact">Click here for our contact details.</a>
            </Link>{' '}
            <p>We hope to cheese you soon!!</p>
          </div>
        </Thankyou>
      </Layout>
    </>
  );
}
