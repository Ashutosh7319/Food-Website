import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider, useCart } from './context/CartContext';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Home from './pages/Home';
import FullMenu from './pages/FullMenu';

import FloatingCartBtn from './components/Cart/FloatingCartBtn';
import CartSidebar from './components/Cart/CartSidebar';
import CheckoutModal from './components/Cart/CheckoutModal';
import OrderTracking from './components/Order/OrderTracking';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsSidebarOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePaymentSuccess = () => {
    setIsCheckoutOpen(false);
    navigate('/tracking');
  };

  const handleResetOrder = () => {
    clearCart();
    // Router Link in OrderTracking already pushes to '/'
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <Loader />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/tracking" element={<OrderTracking onReset={handleResetOrder} />} />
      </Routes>

      {/* Global Shopping Cart UI */}
      <FloatingCartBtn onClick={() => setIsSidebarOpen(true)} />
      
      <CartSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onCheckout={handleCheckout} 
      />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        onPaymentSuccess={handlePaymentSuccess} 
      />
      
      <ThemeToggle />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
