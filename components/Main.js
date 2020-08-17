import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 150px 75px 75px 75px;
  margin: 20px;
  
  .logo-pic {
    grid-column: 2;
    grid-row: 1 / 2;
    justify-self: center;
  }

  .team-pic {
    object-fit: cover;
    width: 535px;
    height: 400px;
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    margin-top: 22px;
  }

  h1 {
    font-size: 80px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin-top: 45px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-self: center;
  }
  h1 span {
    color: #eecc09;
  }

  h2 {
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    width: 800px;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    justify-self: center;
  }

  hr {
    width: 850px;
    height: 0.2em;
    background-color: #737373;
    grid-column: 1 / 4;
    grid-row: 6;
    align-self: center;
  }

@media (max-width: 1240px) {
  h2 {
    width: 600px;
  }
}

@media (max-width: 990px){
  .team-pic {
    display: none;
  }

  h1 {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    justify-self: center;
  }

  h2 {
    width: 550px;
    grid-column: 1 / 4;
    grid-row: 4 / 5;
    justify-self: center;
  }
  hr {
    width: 650px;
    grid-row: 5;
    align-self: end;
  }
}
  @media (max-width: 770px){
  .team-pic {
    display: none;
  }

  h1 {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    justify-self: center;
    font-size: 65px;
  }

  h2 {
    width: 550px;
    grid-column: 1 / 4;
    grid-row: 4 / 5;
    justify-self: center;
    font-size: 40px;
  }
  hr {
    width: 450px;
  }
}

@media (max-width: 550px){
  .team-pic {
    display: none;
  }

  h1 {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    justify-self: center;
    font-size: 55px;
  }

  h2 {
    width: 450px;
    grid-column: 1 / 4;
    grid-row: 4 / 5;
    justify-self: center;
    align-self: start;
    font-size: 35px;
  }

  hr {
    width: 335px;
    grid-row: 6;
    align-self: start;
  }
}

@media(max-width: 520px) {
  h2 {
    margin-top: 10px;
    font-size: 30px;
    width: 340px;
  }
}
`;

const Main = (props) => (
  <>
      <Container>
        <img className="logo-pic" src="/images/logo.png" alt="cheese-logo" width="200px" />
        <img className="team-pic" src="/images/team.jpg" alt="informalteampic" width="600px"/>
        <h1 className="title">
          We love <span>cheese</span>.
        </h1>
        <h2 className="cheese-possibility">
          This is why we bring to you the possibility of having the world’s best
          cheeses of 2019 at your fingertips.{' '}
        </h2>
        <hr className="break-line"></hr>
      </Container>
  </>
);

export default Main;
