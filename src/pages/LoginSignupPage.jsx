// filepath: src/pages/LoginSignupPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just navigate to dashboard
    navigate('/dashboard');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '2rem',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '3rem',
      width: '100%',
      maxWidth: '450px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    title: {
      color: '#ffffff',
      fontSize: '2rem',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    subtitle: {
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    toggle: {
      display: 'flex',
      background: 'rgba(15, 23, 42, 0.8)',
      borderRadius: '0.5rem',
      padding: '0.25rem',
      marginBottom: '2rem',
    },
    toggleBtn: (active) => ({
      flex: 1,
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.375rem',
      background: active ? 'rgba(59, 130, 246, 0.8)' : 'transparent',
      color: active ? '#ffffff' : '#94a3b8',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.2s',
    }),
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      marginBottom: '1rem',
      background: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      border: 'none',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    backLink: {
      display: 'block',
      textAlign: 'center',
      marginTop: '1.5rem',
      color: '#94a3b8',
      textDecoration: 'none',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p style={styles.subtitle}>
          {isLogin ? 'Sign in to continue to EmailBot' : 'Join EmailBot today'}
        </p>

        <div style={styles.toggle}>
          <button 
            style={styles.toggleBtn(isLogin)} 
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button 
            style={styles.toggleBtn(!isLogin)} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}
          <button type="submit" style={styles.button}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <a style={styles.backLink} onClick={() => navigate('/')}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default LoginSignupPage;