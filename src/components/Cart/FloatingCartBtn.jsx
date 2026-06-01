import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCartBtn({ onClick }) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '100px', // next to theme toggle
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: '#fff',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 25px hsla(25, 95%, 55%, 0.4)',
            zIndex: 1000,
          }}
        >
          <ShoppingBag size={28} />
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: 'var(--bg)',
            color: 'var(--text)',
            border: '2px solid var(--accent)',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {totalItems}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
