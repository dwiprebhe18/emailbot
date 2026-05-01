// filepath: src/components/Features.jsx
function Features() {
  const featuresList = [
    {
      icon: '⚡',
      title: 'Smart Automation',
      description: 'Automate repetitive email tasks with AI-powered workflows that learn from your patterns.',
      color: '#3b82f6',
    },
    {
      icon: '🎯',
      title: 'Personalized Templates',
      description: 'Create dynamic templates that adapt to each recipient while maintaining your brand voice.',
      color: '#8b5cf6',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track open rates, click-throughs, and responses with detailed insights and reports.',
      color: '#06b6d4',
    },
    {
      icon: '💬',
      title: 'Contact Management',
      description: 'Organize and manage your contacts with ease. Import, categorize, and segment your audience.',
      color: '#10b981',
    },
  ];

  return (
    <section id="features" style={styles.features}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>Why Choose Us</span>
          <h2 style={styles.heading}>Everything you need to scale your email</h2>
          <p style={styles.subheading}>
            Powerful features designed to help businesses communicate more effectively.
          </p>
        </div>
        <div style={styles.grid}>
          {featuresList.map((feature, index) => (
            <div key={index} style={{...styles.card, borderColor: `${feature.color}20`}}>
              <div style={{...styles.iconWrapper, backgroundColor: `${feature.color}15`}}>
                <span style={{...styles.icon, color: feature.color}}>{feature.icon}</span>
              </div>
              <h3 style={styles.title}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  features: {
    padding: '5rem 2rem',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  label: {
    display: 'inline-block',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#60a5fa',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.75rem',
  },
  heading: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#f1f5f9',
    marginBottom: '0.75rem',
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    maxWidth: '500px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    minHeight: '60vh',
  },
  card: {
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    width: '280px',
    transition: 'all 0.3s',
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  icon: {
    fontSize: '1.5rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#f1f5f9',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#94a3b8',
    lineHeight: 1.6,
  },
};

export default Features;