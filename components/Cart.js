import Layout from './Layout';

export default function Cart(props) {
  // Cookies.getJSON(cookieValue); //Not use this one, include Next cookies to read it on the server side. Using getServerSideProps
  return (
    <>
      <Layout>This is my shopping cart.</Layout>
    </>
  );
}
