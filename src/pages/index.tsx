<<<<<<< HEAD
import Head from "../../node_modules/next/head";
import { SubscribeButton } from "../components/SubscribeButton/index";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
=======
import {GetStaticProps} from 'next';
import Head from 'next/head';
import {SubscribeButon} from '../components/SubscribeButton';
import {stripe} from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
<<<<<<< HEAD
          <span>👏Hey, Welcome</span>
          <h1>
            News about the <span>React</span> word.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
=======
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span>
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButon priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girls coding" />
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
      </main>
    </>
  );
}
<<<<<<< HEAD
=======

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L42riBuBo06nozQiG2LtIp7');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 horas
  };
};
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
