// filepath: src/pages/LandingPage.jsx
// Import all section components from the components folder
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';

function LandingPage() {
  return (
    <div>
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