// filepath: src/components/Hero.jsx
import { useEffect, useRef } from 'react';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.008;
      const w = canvas.width;
      const h = canvas.height;

      // Create smooth gradient background
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, `hsl(220, 30%, ${15 + Math.sin(time) * 5}%)`);
      gradient.addColorStop(0.5, `hsl(240, 25%, ${12 + Math.sin(time * 0.7) * 4}%)`);
      gradient.addColorStop(1, `hsl(260, 20%, ${10 + Math.sin(time * 0.5) * 3}%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Draw flowing waves
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, h * 0.6);
        
        for (let x = 0; x <= w; x += 10) {
          const y = h * 0.5 + 
            Math.sin(x * 0.003 + time + i) * 40 +
            Math.sin(x * 0.006 + time * 1.5 + i) * 20 +
            i * 30;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        
        const waveGradient = ctx.createLinearGradient(0, 0, w, 0);
        waveGradient.addColorStop(0, `hsl(${220 + i * 20}, 70%, 50%)`);
        waveGradient.addColorStop(1, `hsl(${260 + i * 15}, 60%, 40%)`);
        ctx.fillStyle = waveGradient;
        ctx.fill();
      }

      // Draw floating particles
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < 50; i++) {
        const px = (Math.sin(i * 0.5 + time * 0.3) * 0.5 + 0.5) * w;
        const py = (Math.cos(i * 0.7 + time * 0.2) * 0.5 + 0.5) * h;
        const size = 2 + Math.sin(i + time) * 1;
        
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${200 + i % 60}, 80%, 70%)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section style={styles.hero}>
      <canvas ref={canvasRef} style={styles.canvas}></canvas>
      
      <div style={styles.container}>
        <div style={styles.badge}>🚀 New: AI-Powered Responses</div>
        <h1 style={styles.title}>
          Automate Your Emails with
          <span style={styles.highlight}> Intelligent AI</span>
        </h1>
        <p style={styles.subtitle}>
          Save hours every week with smart automation, personalized templates, and 
          AI-driven responses that sound like you—only faster.
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.secondaryButton}>Watch Demo</button>
        </div>
        <div style={styles.trust}>
          <span style={styles.trustText}>Trusted by 100+ teams</span>
          <div style={styles.logos}>
            <span style={styles.logoPlaceholder}>🏢</span>
            <span style={styles.logoPlaceholder}>🏢</span>
            <span style={styles.logoPlaceholder}>🏢</span>
            <span style={styles.logoPlaceholder}>🏢</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: '5rem 2rem',
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    maxWidth: '800px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#60a5fa',
    fontSize: '0.85rem',
    fontWeight: 600,
    borderRadius: '20px',
    marginBottom: '1.5rem',
    border: '1px solid rgba(96, 165, 250, 0.3)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '1.25rem',
    lineHeight: 1.2,
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
  },
  highlight: {
    color: '#60a5fa',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    marginBottom: '2rem',
    lineHeight: 1.7,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  secondaryButton: {
    padding: '0.9rem 2rem',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    backdropFilter: 'blur(10px)',
  },
  trust: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '2rem',
  },
  trustText: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    fontWeight: 500,
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '1rem',
  },
  logoPlaceholder: {
    fontSize: '1.5rem',
    opacity: 0.5,
  },
};

export default Hero;