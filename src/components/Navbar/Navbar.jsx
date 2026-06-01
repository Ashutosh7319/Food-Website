import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <img src="/images/DesignIN.png" alt="Design.IN Logo" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer' }}>
          {isMenuOpen ? <X size={34} /> : <MenuIcon size={34} />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="nav-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Full Menu</Link></li>
          <li><a href="/#reservation" onClick={() => setIsMenuOpen(false)}>Reservation</a></li>
          <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </nav>
      
      {/* Inline styles just for mobile menu toggle behavior overriding css if needed */}
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle { display: block !important; }
          .nav-links {
            position: fixed;
            top: 15%;
            right: -100%;
            background: var(--glass-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            width: 100%;
            height: 100vh;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 5rem;
            transition: 0.4s ease;
          }
          .nav-links.show {
            right: 0;
          }
        }
      `}</style>
    </header>
  );
}
