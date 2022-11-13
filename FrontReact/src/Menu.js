import React from "react";
import { useStateContext } from "./context/StateContext"
import "./index.css";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Menu = ({ items }) => {
  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price, vid } = item;

        return (
          <article key={id} className="menu-item">
            {vid ? <video src={vid} width="750" height="500" controls className="video"></video> : <img src={img} alt={title} className="photo" />}
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div className="quantity-and-buttons">
                <div className="quantity">
                  <div className="quantity-2">Quantity:</div>
                  <div className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                  </div>
                </div>
                <button type="button" className="add-to-cart" onClick={() => onAdd(items, qty)}>Add to Cart</button>
              </div>
            </div>
          </article>
        );
      })}
    </div >
  );
};

export default Menu;
