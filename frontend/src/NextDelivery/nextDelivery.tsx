import { useState, useEffect } from 'react';
import styles from './nextDelivery.module.css';
import axios from 'axios';

type PouchSize = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

const POUCH_SIZE_PRICES: Record<PouchSize, number> = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66.0,
  E: 69.0,
  F: 71.25,
};

interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: string;
}

interface Delivery {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}

export const DeliveryDetails = ({ deliveryId }: { deliveryId: string }) => {
  const [delivery, setDelivery] = useState<Delivery | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // fetching data from hardcoded example id
  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/comms/your-next-delivery/${'ff535484-6880-4653-b06e-89983ecf4ed5'}`,
        );
        setDelivery(response.data);
        setError(null);
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? `Error: ${err.response?.status} - ${err.message}`
            : 'An unknown error occurred',
        );
        console.error('Failed to fetch delivery information:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDelivery();
  }, [deliveryId]);

  if (loading) {
    return (
      <div className={styles.loading}>Loading your delivery information...</div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        Unable to load delivery information: {error}
      </div>
    );
  }

  if (!delivery) {
    return (
      <div className={styles.noData}>No delivery information available.</div>
    );
  }

  const activeCats = delivery.cats.filter((cat) => cat.subscriptionActive);

  const catNames = activeCats.map((cat) => cat.name).join(' and ');

  function calculateActiveCatsPrice(activeCats: Cat[]): number {
    return activeCats.reduce((total, cat) => {
      const size = cat.pouchSize as PouchSize;

      if (!(size in POUCH_SIZE_PRICES)) {
        throw new Error(
          `Invalid pouch size: ${cat.pouchSize} for cat: ${cat.name}`,
        );
      }

      return total + POUCH_SIZE_PRICES[size];
    }, 0);
  }

  const totalPrice = calculateActiveCatsPrice(activeCats).toFixed(2);

  return (
    <div className={styles.deliveryCard}>
      <div className={styles.freeGiftTag}>FREE GIFT</div>

      <div className={styles.imageSection}>
        <img src="/cat.jpg" alt="Cat" className={styles.catImage} />
      </div>

      <div className={styles.deliveryInfo}>
        <h1 className={styles.deliveryTitle}>
          Your next delivery for {catNames}
        </h1>

        <p className={styles.deliveryMessage}>
          Hey {delivery.firstName}! In two days' time, we'll be charging you for
          your next order for {catNames}'s fresh food.
        </p>

        <div className={styles.priceInfo}>
          <p>Total price: £{totalPrice}</p>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.seeDetailsButton}>SEE DETAILS</button>
          <button className={styles.editDeliveryButton}>EDIT DELIVERY</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
