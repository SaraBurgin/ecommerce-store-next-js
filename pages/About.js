import Head from 'next/head';
import Link from 'next/link';

<Head>
  <title>About</title>
  <link rel="icon" href="/favicon.ico" />
</Head>;

export default function About() {
  return (
    <>
      <header>My eCommerce Store</header>

      <main>
        <h1>About</h1>

        <p>
          Check out our{' '}
          <Link href="/">
            <a>Home page</a>
          </Link>
        </p>
      </main>
    </>
  );
}
