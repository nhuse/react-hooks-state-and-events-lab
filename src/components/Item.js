import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);
  const removeButton = inCart ? "remove" : "add"
  const buttonText = inCart ? "Remove" : "Add"

  function addToCart() {
    
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => {
        if(!inCart){
          setCart(true)
        }else{
          setCart(false);
        }
      }} className={removeButton}>{buttonText}</button>
    </li>
  );
}

export default Item;
