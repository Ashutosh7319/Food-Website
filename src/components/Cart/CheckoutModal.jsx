import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

export default function CheckoutModal({ isOpen, onClose, onPaymentSuccess }) {
  const { total } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (paymentMethod === 'UPI' && !upiId.includes('@')) {
      toast.error('Please enter a valid UPI ID');
      return;
    }

    setIsProcessing(true);
    // Simulate API delay
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 11000
          }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: 'var(--bg)',
              padding: '2.5rem',
              borderRadius: '24px',
              width: '90%',
              maxWidth: '450px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              position: 'relative'
            }}
          >
            <button 
              onClick={onClose} 
              style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ×
            </button>
            <h2 style={{ color: 'var(--text)', marginBottom: '0.5rem', textAlign: 'center' }}>Checkout</h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>Amount to pay: <strong style={{ color: 'var(--accent)' }}>₹{total.toFixed(2)}</strong></p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <div 
                onClick={() => setPaymentMethod('UPI')}
                style={{
                  flex: 1, padding: '1rem', textAlign: 'center', borderRadius: '12px', cursor: 'pointer',
                  border: paymentMethod === 'UPI' ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: paymentMethod === 'UPI' ? 'hsla(25, 95%, 55%, 0.1)' : 'var(--bg-soft)'
                }}
              >
                UPI
              </div>
              <div 
                onClick={() => setPaymentMethod('COD')}
                style={{
                  flex: 1, padding: '1rem', textAlign: 'center', borderRadius: '12px', cursor: 'pointer',
                  border: paymentMethod === 'COD' ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: paymentMethod === 'COD' ? 'hsla(25, 95%, 55%, 0.1)' : 'var(--bg-soft)'
                }}
              >
                Cash on Delivery
              </div>
            </div>

            {paymentMethod === 'UPI' && (
              <div style={{ marginBottom: '2rem' }}>
                <input 
                  type="text" 
                  placeholder="Enter UPI ID (e.g. user@okhdfc)" 
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  style={{
                    width: '100%', padding: '1rem 1.2rem', fontFamily: 'Poppins', background: 'var(--bg-soft)',
                    border: '1px solid var(--border)', borderRadius: '14px', color: 'var(--text)', fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            )}

            {paymentMethod === 'COD' && (
              <div style={{ marginBottom: '2rem', color: 'var(--text-muted)', textAlign: 'center', background: 'var(--bg-soft)', padding: '1rem', borderRadius: '12px' }}>
                Pay cash to the delivery executive upon arrival.
              </div>
            )}

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              style={{
                width: '100%', padding: '1rem', background: 'var(--accent)', color: '#fff', border: 'none',
                borderRadius: '999px', fontSize: '1.1rem', fontWeight: '600', cursor: isProcessing ? 'not-allowed' : 'pointer',
                fontFamily: 'Poppins', opacity: isProcessing ? 0.7 : 1
              }}
            >
              {isProcessing ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
