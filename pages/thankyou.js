import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';

const Thankyou = styled.div`
display: grid;
justify-items: center;
width: 80vw;
margin: 50px;
color: #737373;
text-justify: inter-word;
font-family: 'American Typewriter', 'serif';
     h2 {
     font-size: 20px;
   }
  
  .link2contact {
    justify-self: center;
    margin-top: 20px;
    color: #737373;
    text-decoration: underline;
     :hover {
      color: #eecc09;
       }
   }
    p {
    justify-self: center;
    margin-top:20px;
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
              details. < br/> If you have any requests don´t hesitate to contact us.{' '}
            </h2>
            <Link href="/contact">
              <a className="link2contact">Click here for our contact details.</a>
            </Link>{' '}
            <p>Come back soon!!</p>
          </div>
        </Thankyou>
      </Layout>
    </>
  );
}
