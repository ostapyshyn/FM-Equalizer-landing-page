import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Logo />
      <p>
        All rights reserved © Equalizer 2021 <br /> Have any problems? Contact us via social media
        or
        <br /> email us at <span>equalizer@example.com</span>
      </p>
      <ul>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
