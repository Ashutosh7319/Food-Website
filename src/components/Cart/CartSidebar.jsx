import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartSidebar({ isOpen, onClose, onCheckout }) {
  const { cartItems, updateQuantity, removeFromCart, subtotal, gst, deliveryCharge, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 9999,
            }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '400px',
              background: 'var(--bg)',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '1px solid var(--border)'
            }}
          >
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
              <h2 style={{ color: 'var(--text)' }}>Your Cart</h2>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
                <X size={28} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
              {cartItems.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cartItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '12px' }} />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ color: 'var(--text)', marginBottom: '4px' }}>{item.title}</h4>
                        <div style={{ color: 'var(--accent)', fontWeight: 'bold' }}>₹{item.price}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-soft)', padding: '0.2rem', borderRadius: '8px' }}>
                        <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}><Minus size={16} /></button>
                        <span style={{ color: 'var(--text)', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}><Plus size={16} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'hsl(0, 80%, 60%)', cursor: 'pointer', marginLeft: '0.5rem' }}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div style={{ padding: '2rem', background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                  <span>GST (5%)</span>
                  <span>₹{gst.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                  <span>Delivery Charge</span>
                  <span>₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--accent)' }}>₹{total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '999px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'Poppins'
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
