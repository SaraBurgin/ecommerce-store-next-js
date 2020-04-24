import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  background-color: #eecc09;
  color: #ffffff;
  width: 175px;
  height: 50px;
  border-radius: 8px;
  padding: 7px;
  font-size: 21px;
  margin-left: 625px;
  margin-top: 100px;
  vertical-align: center;

  .payNow {
    margin-top: 5px;
  }

  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: #eecc09;
    border: 2px solid #eecc09;
  }
  :focus {
    outline-color: #ffffff;
  }
`;

export default function Payment() {
  return (
    <>
      <Layout>
        <Link href="/thankyou">
          <Button>
            <p className="payNow">Pay now!</p>
          </Button>
        </Link>
      </Layout>
    </>
  );
}
