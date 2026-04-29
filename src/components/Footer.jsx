// filepath: src/components/Footer.jsx
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logoIcon}>📧</div>
            <span style={styles.logoText}>EmailBot</span>
          </div>
          <p style={styles.tagline}>Smart email automation for modern teams.</p>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>© 2026 EmailBot. All rights reserved.</p>
          <div style={styles.links}>
            <a href="#" style={styles.link}>Privacy</a>
            <a href="#" style={styles.link}>Terms</a>
            <a href="#" style={styles.link}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '3rem 2rem',
    backgroundColor: '#1e293b',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  top: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem',
  },
  logoIcon: {
    fontSize: '1.5rem',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  tagline: {
    color: '#94a3b8',
    fontSize: '0.95rem',
  },
  divider: {
    height: '1px',
    backgroundColor: '#334155',
    marginBottom: '1.5rem',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    color: '#64748b',
    fontSize: '0.9rem',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  },
};

export default Footer;