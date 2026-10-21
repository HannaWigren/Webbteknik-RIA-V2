import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Order from './pages/Order';
import Reviews from './pages/Reviews';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/omoss" element={<About />} />
        <Route path="/bestall" element={<Order />} />
        <Route path="/recensioner" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;