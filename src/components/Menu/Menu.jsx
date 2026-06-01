import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';

const menuItems = [
  {
    id: 'pizza-1',
    title: "Italian Pizza",
    description: "Loaded with premium cheese and fresh toppings.",
    price: 299,
    image: "/images/pizza2.png",
  },
  {
    id: 'burger-1',
    title: "Classic Burger",
    description: "Flame grilled perfection in every bite.",
    price: 249,
    image: "/images/burger.png",
  },
  {
    id: 'fries-1',
    title: "French Fries",
    description: "Crispy, golden, and perfectly seasoned.",
    price: 149,
    image: "/images/fries.png",
  }
];

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-heading">
        <span>Our Special Menu</span>
        <h2>Freshly Made For You</h2>
      </div>

      <div className="menu-container">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link 
          to="/menu" 
          className="hero-btn" 
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          See Full Menu
        </Link>
      </div>
    </section>
  );
}
