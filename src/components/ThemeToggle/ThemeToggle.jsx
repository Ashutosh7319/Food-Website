import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--bg-soft)',
        border: '1px solid var(--border)',
        color: 'var(--text)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--shadow)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      {isLight ? <Sun size={24} color="#f59e0b" /> : <Moon size={24} color="#e2e8f0" />}
    </button>
  );
}
