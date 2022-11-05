import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <section className={styles.card}>
      <h2>Premium EQ</h2>
      <p>
        Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your
        listening experience to a whole new level and access all our incredible features!
      </p>
      <p className={styles.price}>
        <span>$4 </span>/ month
      </p>
    </section>
  );
};

export default Card;
