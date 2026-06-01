import { motion } from 'framer-motion';

export default function TableCard({ table, selectedPrice, onSelect }) {
  const isSelected = selectedPrice === table.priceValue;

  return (
    <motion.div 
      className={`table-card ${isSelected ? 'active-table' : ''}`}
      onClick={() => onSelect(table.priceValue)}
      whileHover={{ y: -10, boxShadow: '0 0 30px hsla(25, 95%, 55%, 0.2)', borderColor: 'var(--accent)' }}
      style={{
        borderColor: isSelected ? 'var(--accent)' : 'transparent',
      }}
    >
      <img src={table.image} alt={table.title} />
      <div className="table-info">
        <h3>{table.title}</h3>
        <p>{table.guests}</p>
        <h4>₹{table.priceValue}</h4>
      </div>
    </motion.div>
  );
}
