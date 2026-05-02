// filepath: src/pages/LandingPage.jsx
// Import all section components from the components folder
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ←
      </button>
      
      {/* Navbar section */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <Features />
    </div>
  );
}

export default LandingPage;