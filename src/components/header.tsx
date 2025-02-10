import { useState, useEffect, useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div>
            <span className="logo">Kunal Sharma</span>
          </div>
          <nav ref={menuRef} className={`desktop-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <Link to="/home" className="nav-link" onClick={() => { setIsMenuOpen(false); handleLinkClick(); }}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => { setIsMenuOpen(false); handleLinkClick(); }}>About</Link>
            <Link to="/project" className="nav-link" onClick={() => { setIsMenuOpen(false); handleLinkClick(); }}>Projects</Link>
            <Link to="/contact" className="nav-link" onClick={() => { setIsMenuOpen(false); handleLinkClick(); }}>Contacts</Link>
          </nav>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;