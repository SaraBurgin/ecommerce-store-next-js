import Header from './Header';
import Footer from './Footer';
import Styled from 'styled-components'

const Container = Styled.div `
  margin: 0px;
  padding: 0px;
`

const Layout = props => (
  <>
  <Container>
      <Header />
        {props.children}{' '}
        {/*Whatever page we are on this is where it is going to output. With props.*/}
      <Footer />
  </Container>
  </>
);

export default Layout;
