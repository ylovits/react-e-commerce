import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { imgUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item row pt-2 pb-2 bg-white">
      <div className="col-md-5 p-0">
        <img src={imgUrl} alt="item" />
      </div>
      <div className="details col-md-7 text-left">
        <p className="name mb-0 h6">{name}</p>
        <p className="price mb-0 h6 text-secondary">{`${quantity} x ${price}€`}</p>
      </div>
    </div>
  );
};

export default CartItem;
