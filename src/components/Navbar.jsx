// filepath: src/components/Navbar.jsx
function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <div style={styles.logoIcon}>📧</div>
        <span style={styles.logoText}>EmailBot</span>
      </div>
      <div style={styles.links}>
        <a href="#features" style={styles.link}>Features</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
        <button style={styles.ctaButton}>Get Started</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3rem',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    fontSize: '1.75rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  ctaButton: {
    padding: '0.6rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
};

export default Navbar;