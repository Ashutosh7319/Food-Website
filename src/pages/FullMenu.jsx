import { useEffect } from 'react';
import MenuCard from '../components/Menu/MenuCard';

const fullMenuItems = [
  // PIZZAS
  { id: 'pizza-1', category: 'Pizza', title: "Margherita Classic", description: "Fresh basil, mozzarella, and our signature tomato sauce.", price: 299, image: "/images/pizza2.png" },
  { id: 'pizza-2', category: 'Pizza', title: "Pepperoni Feast", description: "Loaded with premium pepperoni and extra cheese.", price: 399, image: "/images/pizza.png" },
  { id: 'pizza-3', category: 'Pizza', title: "Veggie Supreme", description: "Bell peppers, olives, mushrooms, and onions.", price: 349, image: "/images/pizza2.png" },
  { id: 'pizza-4', category: 'Pizza', title: "BBQ Chicken", description: "Smoky BBQ sauce, grilled chicken, and red onions.", price: 449, image: "/images/pizza.png" },
  { id: 'pizza-5', category: 'Pizza', title: "Four Cheese", description: "Mozzarella, cheddar, parmesan, and gouda blend.", price: 379, image: "/images/pizza2.png" },

  // BURGERS
  { id: 'burger-1', category: 'Burger', title: "Classic Cheeseburger", description: "Beef patty, cheddar cheese, lettuce, and tomato.", price: 249, image: "/images/burger.png" },
  { id: 'burger-2', category: 'Burger', title: "Double Smash", description: "Two smashed patties, double cheese, and secret sauce.", price: 349, image: "/images/burger.png" },
  { id: 'burger-3', category: 'Burger', title: "Crispy Chicken", description: "Golden fried chicken breast with spicy mayo.", price: 279, image: "/images/burger.png" },
  { id: 'burger-4', category: 'Burger', title: "Veggie Delight", description: "Spiced potato and pea patty with fresh herbs.", price: 199, image: "/images/burger.png" },
  { id: 'burger-5', category: 'Burger', title: "Truffle Mushroom", description: "Swiss cheese, sautéed mushrooms, and truffle aioli.", price: 399, image: "/images/burger.png" },

  // FRIES
  { id: 'fries-1', category: 'Fries', title: "Classic French Fries", description: "Crispy, golden, and perfectly salted.", price: 129, image: "/images/fries.png" },
  { id: 'fries-2', category: 'Fries', title: "Peri Peri Fries", description: "Tossed in spicy and tangy peri peri seasoning.", price: 149, image: "/images/fries.png" },
  { id: 'fries-3', category: 'Fries', title: "Cheese Loaded Fries", description: "Smothered in hot, melting cheese sauce.", price: 199, image: "/images/fries.png" },
  { id: 'fries-4', category: 'Fries', title: "Bacon & Cheese Fries", description: "Topped with crispy bacon bits and melted cheese.", price: 249, image: "/images/fries.png" },
  { id: 'fries-5', category: 'Fries', title: "Truffle Parm Fries", description: "Tossed with truffle oil and parmesan cheese.", price: 229, image: "/images/fries.png" },

  // BEVERAGES (Using pizza/burger images as fallback if no drink images exist, but stylized description)
  { id: 'bev-1', category: 'Beverage', title: "Classic Cola", description: "Chilled and refreshing classic cola.", price: 99, image: "/images/DesignIN.png" },
  { id: 'bev-2', category: 'Beverage', title: "Iced Lemon Tea", description: "Freshly brewed tea with a splash of lemon.", price: 129, image: "/images/DesignIN.png" },
  { id: 'bev-3', category: 'Beverage', title: "Berry Smoothie", description: "Thick blend of mixed berries and yogurt.", price: 199, image: "/images/DesignIN.png" },
  { id: 'bev-4', category: 'Beverage', title: "Cold Coffee", description: "Creamy iced coffee with vanilla ice cream.", price: 179, image: "/images/DesignIN.png" },
  { id: 'bev-5', category: 'Beverage', title: "Fresh Lime Soda", description: "Sweet and salty refreshing lime drink.", price: 109, image: "/images/DesignIN.png" },
];

export default function FullMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Pizza', 'Burger', 'Fries', 'Beverage'];

  return (
    <div style={{ padding: '8rem 8% 4rem 8%', background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="menu-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span>Explore Everything</span>
        <h2 style={{ fontSize: '3rem', color: 'var(--text)' }}>Our Full Menu</h2>
      </div>

      {categories.map(category => (
        <div key={category} style={{ marginBottom: '4rem' }}>
          <h3 style={{ 
            color: 'var(--accent)', 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            borderBottom: '1px solid var(--border)', 
            paddingBottom: '0.5rem' 
          }}>
            {category}s
          </h3>
          <div className="menu-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {fullMenuItems.filter(item => item.category === category).map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
