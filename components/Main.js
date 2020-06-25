import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 75px 75px 75px 75px;

  img {
    object-fit: cover;
    width: 540px;
    height: 400px;
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }

  h1 {
    font-size: 80px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: 15px;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  h1 span {
    color: #eecc09;
  }

  h2 {
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  hr {
    width: 850px;
    height: 0.2em;
    background-color: #737373;
    grid-column: 1 / 4;
    grid-row: 6;
  }

`;

const Main = (props) => (
  <>
      <Container>
        <img src="/images/team.jpg" alt="informalteampic" width="600px"/>
        <h1 className="title">
          We love <span>cheese</span>.
        </h1>
        <h2>
          This is why we bring to you the possibility of having the world’s best
          cheeses of 2019 at your fingertips.{' '}
        </h2>
        <hr className="break-line"></hr>
      </Container>
  </>
);

export default Main;
