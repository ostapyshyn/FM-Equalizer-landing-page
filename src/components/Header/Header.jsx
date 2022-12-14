import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <section className={styles.header}>
      <Logo />
      <h1>We make your music sound extraordinary.</h1>
      <p>
        A system audio equalizer specifically designed for Android and iOS. Freely tune the way your
        music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids,
        treble, gain control, reverb, and more!
      </p>
    </section>
  );
};

export default Header;
