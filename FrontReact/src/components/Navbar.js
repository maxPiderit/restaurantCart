import React from 'react';
import Cart from './Cart';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import "./components.css";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty"><span className="cart-item-qty-number">{totalQuantities}</span></span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar