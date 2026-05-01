// filepath: src/pages/DashboardPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const stats = [
    { label: 'Emails Sent', value: '156', icon: '📧', change: '+12%' },
    { label: 'Templates Used', value: '24', icon: '📄', change: '+8%' },
    { label: 'Time Saved', value: '12h', icon: '⏱️', change: '+25%' },
    { label: 'Active Days', value: '30', icon: '📅', change: '100%' },
  ];

  const recentEmails = [
    { to: 'manager@company.com', subject: 'Leave Request', date: '2 hours ago', status: 'Sent' },
    { to: 'hr@company.com', subject: 'Job Application', date: '1 day ago', status: 'Sent' },
    { to: 'client@business.com', subject: 'Meeting Request', date: '2 days ago', status: 'Sent' },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: darkMode ? '#0f172a' : '#f8fafc',
      padding: '2rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    title: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '2rem',
      fontWeight: 700,
    },
    subtitle: {
      color: darkMode ? '#94a3b8' : '#64748b',
      marginTop: '0.25rem',
    },
    btn: {
      padding: '0.75rem 1.5rem',
      background: darkMode ? '#334155' : '#e2e8f0',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      color: darkMode ? '#ffffff' : '#1e293b',
      marginRight: '0.5rem',
    },
    logoutBtn: {
      padding: '0.75rem 1.5rem',
      background: '#ef4444',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      color: '#ffffff',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    statCard: {
      background: darkMode ? '#1e293b' : '#ffffff',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    },
    statIcon: {
      fontSize: '2rem',
      marginBottom: '0.75rem',
    },
    statLabel: {
      color: darkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.875rem',
      marginBottom: '0.25rem',
    },
    statValue: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '2rem',
      fontWeight: 700,
    },
    statChange: {
      color: '#22c55e',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
    },
    section: {
      background: darkMode ? '#1e293b' : '#ffffff',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
      marginBottom: '2rem',
    },
    sectionTitle: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    emailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      background: darkMode ? 'rgba(15, 23, 42, 0.5)' : '#f1f5f9',
      borderRadius: '0.5rem',
      marginBottom: '0.5rem',
    },
    emailInfo: {
      flex: 1,
    },
    emailTo: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontWeight: 600,
    },
    emailSubject: {
      color: darkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.875rem',
    },
    emailDate: {
      color: darkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.75rem',
    },
    statusBadge: {
      padding: '0.25rem 0.75rem',
      background: '#22c55e',
      borderRadius: '1rem',
      color: '#ffffff',
      fontSize: '0.75rem',
      fontWeight: 600,
    },
    quickActions: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    actionBtn: {
      padding: '1rem 1.5rem',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      border: 'none',
      borderRadius: '0.75rem',
      color: '#ffffff',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Dashboard</h1>
          <p style={styles.subtitle}>Welcome back! Here's your email activity overview.</p>
        </div>
        <div>
          <button style={styles.btn} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button style={styles.logoutBtn} onClick={() => navigate('/')}>
            ← Logout
          </button>
        </div>
      </div>

      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div style={styles.statIcon}>{stat.icon}</div>
            <div style={styles.statLabel}>{stat.label}</div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statChange}>{stat.change} from last month</div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.quickActions}>
          <button style={styles.actionBtn} onClick={() => navigate('/templates')}>
            📧 Create New Email
          </button>
          <button style={styles.actionBtn} onClick={() => navigate('/templates')}>
            📄 View Templates
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Emails</h2>
        {recentEmails.map((email, index) => (
          <div key={index} style={styles.emailItem}>
            <div style={styles.emailInfo}>
              <div style={styles.emailTo}>To: {email.to}</div>
              <div style={styles.emailSubject}>{email.subject}</div>
            </div>
            <div style={{textAlign: 'right'}}>
              <div style={styles.emailDate}>{email.date}</div>
              <span style={styles.statusBadge}>{email.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;