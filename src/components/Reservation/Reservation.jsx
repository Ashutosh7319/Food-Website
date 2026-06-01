import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import TableCard from './TableCard';

const tables = [
  {
    id: 1,
    title: "Standard Table",
    guests: "2 - 4 Guests",
    priceValue: "499",
    image: "/images/table1.jpeg",
  },
  {
    id: 2,
    title: "Premium Table",
    guests: "2 - 6 Guests",
    priceValue: "999",
    image: "/images/table2.jpeg",
  }
];

export default function Reservation() {
  const [selectedPrice, setSelectedPrice] = useState("499");
  const [showPopup, setShowPopup] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    setFormData(prev => ({
      ...prev,
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all fields.');
      return;
    }
    
    const token = "RB" + Math.floor(1000 + Math.random() * 9000);
    const selectedTable = tables.find(t => t.priceValue === selectedPrice)?.title;
    
    setReservationDetails({
      token,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      table: selectedTable,
      price: selectedPrice
    });
    
    setShowPopup(true);
  };

  return (
    <section className="reservation-section" id="reservation" style={{ position: 'relative' }}>
      <div className="reservation-heading">
        <span>Book Your Experience</span>
        <h2>Select Your Table</h2>
      </div>

      <div className="table-selection">
        {tables.map(table => (
          <TableCard 
            key={table.id} 
            table={table} 
            selectedPrice={selectedPrice} 
            onSelect={setSelectedPrice} 
          />
        ))}
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleChange}
        />
        <input 
          type="date" 
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input 
          type="time" 
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <div className="table-selector">
          <h3>Select Table</h3>
          {tables.map(table => (
            <label key={table.id}>
              <input 
                type="radio" 
                name="table-type" 
                value={table.priceValue} 
                checked={selectedPrice === table.priceValue}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              {table.title} ({table.guests})
            </label>
          ))}
          <div className="selected-price">
            Price: <span>₹{selectedPrice}</span>
          </div>
        </div>

        <button type="submit">Reserve Now</button>
      </form>

      {/* Enhanced Modal Popup */}
      <AnimatePresence>
        {showPopup && reservationDetails && (
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
              zIndex: 9999
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: 'var(--bg)',
                padding: '3rem',
                borderRadius: '24px',
                width: '90%',
                maxWidth: '450px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--border)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '2rem' }}>Confirmed! ✅</h2>
              
              <div style={{ color: 'var(--text-muted)', lineHeight: '2.2', fontSize: '1.1rem', textAlign: 'left', background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <p><strong>Token:</strong> <span style={{ color: 'var(--accent)', float: 'right' }}>{reservationDetails.token}</span></p>
                <p><strong>Name:</strong> <span style={{ float: 'right', color: 'var(--text)' }}>{reservationDetails.name}</span></p>
                <p><strong>Phone:</strong> <span style={{ float: 'right', color: 'var(--text)' }}>{reservationDetails.phone}</span></p>
                <p><strong>Date:</strong> <span style={{ float: 'right', color: 'var(--text)' }}>{reservationDetails.date}</span></p>
                <p><strong>Time:</strong> <span style={{ float: 'right', color: 'var(--text)' }}>{reservationDetails.time}</span></p>
                <p><strong>Table:</strong> <span style={{ float: 'right', color: 'var(--text)' }}>{reservationDetails.table}</span></p>
                <p style={{ borderTop: '1px solid var(--border)', marginTop: '10px', paddingTop: '10px' }}>
                  <strong>Total Paid:</strong> <span style={{ float: 'right', color: 'var(--accent)', fontWeight: 'bold' }}>₹{reservationDetails.price}</span>
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                style={{
                  marginTop: '2rem',
                  padding: '1rem 3rem',
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
                Close Receipt
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
