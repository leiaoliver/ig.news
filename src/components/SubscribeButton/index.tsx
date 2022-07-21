<<<<<<< HEAD
import styles from "./styles.module.scss";

export function SubscribeButton() {
  return (
    <button type="button" className={styles.subscribeButton}>
=======
import {signIn, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {api} from '../../services/api';
import {getStripeJs} from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButonProps {
  priceId: string;
}

export function SubscribeButon({priceId}: SubscribeButonProps) {
  const {data: session} = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');

      return;
    }

    try {
      const response = await api.post('/subscribe');

      const {sessionId} = response.data;

      const stripe = await getStripeJs();

      stripe.redirectToCheckout({sessionId});
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={() => handleSubscribe()}>
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
      Subscribe now
    </button>
  );
}
