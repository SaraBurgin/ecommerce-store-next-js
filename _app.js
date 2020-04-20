// import cookies from 'next-cookies';
// import App from 'next/app';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
// /* I am making the ctx of cookies available through props to all my pages via creating the _app.js*/

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   // const pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   const allCookies = cookies(appContext.ctx);
//   const cartLength = allCookies.cart.length;
//   return {
//     ...appProps,
//     pageProps: {
//       // ...pageProps,
//       cartLength: cartLength,
//     },
//   };
// };
// export default MyApp;
