import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

export default function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="menu-card"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}
    >
      <motion.img 
        src={item.image} 
        alt={item.title} 
        whileHover={{ scale: 1.08, rotate: 3 }}
      />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <h4 style={{ margin: 0 }}>₹{item.price}</h4>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(item)}
          style={{
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px hsla(25, 95%, 55%, 0.4)'
          }}
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
}
