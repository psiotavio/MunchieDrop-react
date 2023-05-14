import React from 'react';
import logo from '../imgs/Logo.png';
import cart from '../imgs/cart.png';
import './Header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="page-header">
      <div className="logo">
        <Link className="links" to="/"><img src={logo} alt="Munchie logo" /></Link>
      </div>
      <nav>
        <ul>
        <Link className="links" to="/"><li>Home</li> </Link>
        <Link className="links" to="/categories"><li>Categories </li></Link>
        <Link className="links" to="/restaurants"><li>Restaurants </li></Link>
        <Link className="links" to="/aboutus"><li>About us</li></Link>
        </ul>
      </nav>

      <div className="checkout-cart">
        {/* ícone do carrinho */}
        <div id="cart-icon">
          <a href="#">
            <img className="cart-img" src={cart} alt="Cart Icon" />
            <span id="cart-count"></span>
          </a>
        </div>
        <div className="checkout">
          <a href="#checkout">Check-out Order</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
