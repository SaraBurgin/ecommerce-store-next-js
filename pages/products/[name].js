import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Description: </b>
        {'Some product description'}
      </p>
    </>
  );
}
