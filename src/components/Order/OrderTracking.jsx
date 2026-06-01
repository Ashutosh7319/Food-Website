import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Package, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderTracking({ onReset }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate delivery progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 1000); // 100% in 20 seconds for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '8rem 8% 4rem 8%', background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Order Confirmed!</h2>
        <p style={{ color: 'var(--text-muted)' }}>Sit tight, your delicious food is on the way.</p>
      </div>

      <div style={{
        width: '100%', maxWidth: '800px', background: 'var(--bg-soft)', borderRadius: '24px',
        border: '1px solid var(--border)', boxShadow: 'var(--shadow)', overflow: 'hidden'
      }}>
        {/* Animated Map Section */}
        <div style={{ height: '300px', background: '#1c1c1e', position: 'relative', overflow: 'hidden' }}>
          {/* Grid lines to simulate map */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5
          }}></div>
          
          {/* Path line */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <path d="M 100 200 Q 250 50 400 150 T 700 100" fill="none" stroke="var(--border)" strokeWidth="4" strokeDasharray="10 10" />
            <motion.path 
              d="M 100 200 Q 250 50 400 150 T 700 100" 
              fill="none" 
              stroke="var(--accent)" 
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.5 }}
            />
          </svg>

          {/* Restaurant Marker */}
          <div style={{ position: 'absolute', left: '100px', top: '200px', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
            <div style={{ background: 'var(--bg-soft)', padding: '0.5rem', borderRadius: '50%', border: '2px solid var(--text)' }}>
              <MapPin size={24} color="var(--text)" />
            </div>
          </div>

          {/* Destination Marker */}
          <div style={{ position: 'absolute', left: '700px', top: '100px', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%' }}
            >
              <CheckCircle size={24} color="#fff" />
            </motion.div>
          </div>

          {/* Moving Scooter Marker using progress to calculate rough position */}
          {/* Note: for a true SVG path trace, we'd need complex math. For a demo, we interpolate roughly. */}
          <motion.div
            style={{
              position: 'absolute', left: '100px', top: '200px', zIndex: 20,
              background: '#fff', padding: '0.4rem', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
            }}
            animate={{
              // Rough bezier approximation for demo purposes
              left: `${100 + (progress / 100) * 600}px`,
              top: `${200 - (progress / 100) * 100}px`, // simplified arc
            }}
            transition={{ duration: 1, ease: 'linear' }}
          >
            <Navigation size={20} color="var(--accent)" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>
        </div>

        {/* Status Details */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>Estimated Arrival</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Clock size={24} /> {progress < 100 ? '25 mins' : 'Arrived!'}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Order Status</p>
              <h4 style={{ color: 'var(--text)', fontSize: '1.2rem' }}>{progress < 100 ? 'On the way' : 'Delivered'}</h4>
            </div>
          </div>

          <div style={{ width: '100%', background: 'var(--bg)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div 
              style={{ background: 'var(--accent)', height: '100%' }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link 
              to="/" 
              onClick={onReset}
              className="hero-btn" 
              style={{ textDecoration: 'none', display: 'inline-block', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
