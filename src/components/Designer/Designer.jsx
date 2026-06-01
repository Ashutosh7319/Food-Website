import { motion } from 'framer-motion';
import priyanshuImg from '../../assets/priyanshu.jpeg';

export default function Designer() {
  return (
    <section className="designer-section" id="designer" style={{ padding: '6rem 8%', background: 'var(--bg)', display: 'flex', justifyContent: 'center' }}>
      <motion.div 
        className="designer-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -5, boxShadow: '0 20px 40px hsla(25, 95%, 55%, 0.15)', borderColor: 'var(--accent)' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'var(--bg-soft)',
          padding: '3rem',
          borderRadius: '24px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
          maxWidth: '500px',
          textAlign: 'center',
          transition: 'all 0.4s ease'
        }}
      >
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <div style={{
            position: 'absolute',
            inset: '-5px',
            background: 'var(--accent)',
            borderRadius: '50%',
            opacity: '0.5',
            filter: 'blur(15px)',
            zIndex: 0
          }}></div>
          <img 
            src={priyanshuImg} 
            alt="Priyanshu Saha" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              position: 'relative',
              zIndex: 1,
              border: '3px solid var(--bg-soft)'
            }} 
          />
        </div>

        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Priyanshu Saha</h2>
          <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Founder & Designer @ Design.in
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            This website is crafted as a premium demonstration by Design.in to showcase modern aesthetics, seamless interactions, and high-performance React architectures.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
