import styles from './nextDelivery.module.css';

/**
 * TODO: Re-implement API fetching once the 404 error is resolved.
 * Currently, the API will return data from a curl request, e.g., curl http://localhost:3000/your-next-delivery/ff535484-6880-4653-b06e-89983ecf4ed5
 * but will return a 404 error when accessed via the browser.
 *
 * Future implementation could use the following, or alternatively use a library like Axios:
 *
 * import { useState, useEffect } from 'react';
 *
 * const [delivery, setDelivery] = useState<Delivery | null>(null);
 * const [loading, setLoading] = useState<boolean>(true);
 * const [error, setError] = useState<string | null>(null);
 *
 * useEffect(() => {
 *   const fetchDelivery = async () => {
 *     try {
 *       setLoading(true);
 *       const response = await fetch(`http://localhost:3000/comms/your-next-delivery/${deliveryId}`);
 *
 *       if (!response.ok) {
 *         throw new Error(`Error: ${response.status}`);
 *       }
 *
 *       const data = await response.json();
 *       setDelivery(data);
 *       setError(null);
 *     } catch (err) {
 *       setError(err instanceof Error ? err.message : 'An unknown error occurred');
 *       setDelivery(null);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *
 *   fetchDelivery();
 * }, [deliveryId]);
 */

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

function DeliveryDetails() {
  // Hardcoded delivery data to use for now
  const delivery: Delivery = {
    id: 'ff535484-6880-4653-b06e-89983ecf4ed5',
    firstName: 'Kayleigh',
    lastName: 'Wilderman',
    email: 'Kayleigh_Wilderman@hotmail.com',
    cats: [
      {
        name: 'Dorian',
        subscriptionActive: true,
        breed: 'Thai',
        pouchSize: 'C',
      },
      {
        name: 'Ocie',
        subscriptionActive: true,
        breed: 'Somali',
        pouchSize: 'F',
      },
      {
        name: 'Eldridge',
        subscriptionActive: false,
        breed: 'Himalayan',
        pouchSize: 'A',
      },
    ],
  };

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
}

export default DeliveryDetails;
