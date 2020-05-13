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
const InfoForm = styled.form`
  margin-left: 405px;
  margin-top: 40px;
  color: #737373;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    .form-group1 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group2 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group3 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group4 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group5 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group6 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .form-group7 {
      display: grid;
      grid-template-columns: 140px 250px;
    }
    .first-name {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
      }
    .second-name {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .input-email {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .schedule-date {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .input-address {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .input-city {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .input-state {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .input-zip {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 5px;
    }
    .form-control {
      color: #737373;
      font-size: 15px;
      margin-bottom: 5px;
      }
`;
const PaymentForm = styled.form``;
const PaymentMethod = styled.div``;

export default function Payment() {
  return (
    <>
      <Layout>
      <InfoForm>
          <div className="form-row">
            <div className="form-group1">
              <label for="inputFirstName" className="first-name">First Name</label>
              <input
                type="name"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group2">
              <label for="inputSecondName" className="second-name">Second Name</label>
              <input
                type="name"
                className="form-control"
                id="inputSecondName"
                placeholder="Second Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group3">
              <label for="inputEmail4" className="input-email">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group4">
              <label for="scheduleDate" className="schedule-date">Schedule Date</label>
              <input type="date" className="form-control" id="scheduleDate" />
            </div>
          </div>
          <div className="form-group5">
            <label for="inputAddress" className="input-address">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <div className="form-group6">
              <label for="inputCity" className="input-city">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group7">
              <label for="inputState" className="input-state">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group7">
              <label for="inputZip" className="input-zip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
        </InfoForm>
        <PaymentMethod>
          <div>
            <p className="data"> PAYMENT METHOD </p>
            <p>Paypal</p>
            <input type="checkbox" className = "paypal"/>
            <p>Credit Card</p>
            <input type="checkbox" className = "credit-card"/>
          </div>
        </PaymentMethod>
        <PaymentForm>
        {/* <form>
          <div className="form-group">
            <label for="nameOnCard">Name on Card</label>
            <input
              type="Name"
              className="form-control"
              id="nameOnCard"
              placeholder="Name on Card"
            />
          </div>
          <div className="form-group">
            <label for="cardNumber">Card Number</label>
            <input
              type="number"
              className="form-control"
              id="cardNumber"
              placeholder="4111 1111 1111 1111"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="expiryDate"> Expiry Date:</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="12/25"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="securityCode">Security Code</label>
              <input
                type="number"
                className="form-control"
                id="securityCode"
                placeholder="123"
              />
            </div>
          </div> */}
          </PaymentForm> 
        <Link href="/thankyou">
          <Button>
            <p className="payNow">Pay now!</p>
          </Button>
        </Link>
      </Layout>

    </>
  );
}
