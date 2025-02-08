import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Mobile Store. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
