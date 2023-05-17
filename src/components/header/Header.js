import React, { useState } from 'react';
import logo from '../imgs/Logo.png';
import cart from '../imgs/cart.png';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ButtonComponent } from 'components/buttonComponent/button';
import  { Modal } from 'components/modalComponent/modalComponent'

const HeaderComponent = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const carrinho = []; // Array para armazenar os itens do carrinho

  // Função para adicionar um item ao carrinho
  const adicionarItemAoCarrinho = (item) => {
    carrinho.push(item); // Adiciona o item ao array do carrinho
  };

  const handleCartModalOpen = () => {
    setCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setCartModalOpen(false);
  };

  return (
    <>
      <header className="page-header">
        <div className="logo">
          <Link className="links" to="/">
            <img src={logo} alt="Munchie logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <Link className="links" to="/">
              <li>Home</li>
            </Link>
            <Link className="links" to="/categories">
              <li>Categories</li>
            </Link>
            <Link className="links" to="/restaurants">
              <li>Restaurants</li>
            </Link>
            <Link className="links" to="/aboutus">
              <li>About us</li>
            </Link>
          </ul>
        </nav>

        <div className="checkout-cart">
          {/* Ícone do carrinho */}
          <div id="cart-icon">
            <a href="#" onClick={handleCartModalOpen}>
              <img className="cart-img" src={cart} alt="Cart Icon" />
              <span id="cart-count"></span>
            </a>
          </div>
          <div className="checkout">
            <ButtonComponent
              type={'secondary'}
              onClick={handleCartModalOpen}
              children="Check-out Order"
              size={4}
              id={'cart-btn'}
            />
          </div>
        </div>
      </header>

      {cartModalOpen && (
        <Modal className="Modal custom-modal" open={cartModalOpen} onClose={handleCartModalClose}>
          <h1>Cart</h1>
        </Modal>
      )}
    </>
  );
};

export default HeaderComponent;
