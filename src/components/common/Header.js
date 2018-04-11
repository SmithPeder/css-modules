import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.background}>
        <h1 className={styles.text}>Header</h1>
      </div>
    );
  }
}

export default Header;
