import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mobile Store</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link style={styles.navLink} to="/">Home</Link></li>
          <li style={styles.navItem}><Link style={styles.navLink} to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    padding: 0,
  },
  navItem: {
    marginRight: '1rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Header;
