import styled from 'styled-components';

const Container = styled.div`
  img {
    margin-right: -10px;
    float: right;
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  h1 {
    margin-top: 80px;
    margin-left: 100px;
    font-size: 80px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
  h1 span {
    color: #eecc09;
  }
  h2 {
    margin-left: 100px;
    margin-right: 700px;
    margin-top: 35px;
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
`;
const BreakLine = styled.div`
  hr {
    width: 850px;
    height: 0.2em;
    background-color: #737373;
    margin-right: 250px;
    margin-top: 200px;
  }
`;

const Main = (props) => (
  <>
    <div>
      <Container>
        <img src="/images/team.jpg" alt="informalteampic" />
        <h1 className="title">
          We love <span>cheese</span>.
        </h1>
        <h2>
          This is why we bring to you the possibility of having the world’s best
          cheeses of 2019 at your fingertips.{' '}
        </h2>
      </Container>
      <BreakLine>
        <hr></hr>
      </BreakLine>
    </div>
  </>
);

export default Main;
