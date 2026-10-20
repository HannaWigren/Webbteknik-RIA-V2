import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><img src="/logo.png" alt="Pomodoro Pizzeria" className="logo" /></Link></li>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/meny">Meny</Link></li>
          <li><Link to="/omoss">Om oss</Link></li>
          <li><Link to="/bestall">Beställ</Link></li>
          <li><Link to="/recensioner">Recensioner</Link></li>
        </ul>
      </nav>
    </header>
  );
}