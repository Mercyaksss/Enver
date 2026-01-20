'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import '../styles/SliderMenu.scss';


export default function SliderMenu({ onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="slide-menu-overlay" onClick={() => setIsmenuopen(!ismenuopen)}>
      <div 
        className="slide-menu-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <ul className="slide-links">
          <Link href="#home" onClick={onClose}>
            <li>Home</li>
          </Link>
          <Link href="#services" onClick={onClose}>
            <li>Services</li>
          </Link>
          <Link href="#portfolio" onClick={onClose}>
            <li>Our Project</li>
          </Link>
          <Link href="#about" onClick={onClose}>
            <li>About Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}