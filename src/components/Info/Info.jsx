import React from 'react';
import styles from './Info.module.scss';
import phone from '../../assets/illustration-app.png';
import { ReactComponent as Logo } from '../../assets/bg-pattern-2.svg';
import Card from '../Card/Card';

const Info = () => {
  return (
    <section className={styles.info}>
      <img src={phone} alt="phone" />
      <Logo />
      <Card />
    </section>
  );
};

export default Info;
