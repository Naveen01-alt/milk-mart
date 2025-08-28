import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Top.css";

const Top = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      <header className="header">
        {/* Logo */}
        <div className="logo">
          <h1>MilkyWay</h1>
        </div>

        {/* Hamburger button (visible on mobile only) */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Nav buttons */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button className="nav-button" onClick={() => handleNav("/")}>
            Home
          </button>
           <button className="nav-button" onClick={() => handleNav("/products")}>
            Products
          </button>
          <button className="nav-button" onClick={() => handleNav("/cart")}>
            Cart
          </button>
          <button className="nav-button" onClick={() => handleNav("/order")}>
            My Orders
          </button>
        </nav>

      
      </header>
    </>
  );
};

export default Top;
