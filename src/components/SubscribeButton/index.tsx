import styles from './styles.module.scss';

interface SubscribeButonProps {
  priceId: string;
}

export function SubscribeButon({priceId}: SubscribeButonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
