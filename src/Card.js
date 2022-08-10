import React, { useState } from "react";
import productImg from "./assets/shoe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = () => {
  const [qty, setQty] = useState(0);

  const decrement = () => {
    setQty(qty - 1);
  };

  const increment = () => {
    setQty(qty + 1);
  };

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={productImg} alt="shoe" />
      </div>
      <div className="info">
        <h2>Camper</h2>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h4>$60</h4>
        <p>
          Skies very far right before they went gray where were the eyes of a
          horse of a jet pilot when his smile buddies flew over the bank?
        </p>
        <div className="qty-select">
          <button
            onClick={() => (qty > 0 ? decrement() : null)}
            className="qty-btn"
          >
            -
          </button>
          <input readOnly className="input-field" type="number" value={qty} />
          <button onClick={increment} className="qty-btn">
            +
          </button>
        </div>
        <div className="var-select">
          <span>Choose a size: </span>
          <select className="var-select" name="" id="">
            <option>45</option>
            <option>46</option>
            <option>47</option>
          </select>
        </div>
        <div className="color-select">
          <p>Choose a color:</p>
          <input className="radio-btn radio-btn-1" type="radio" name="sample" />

          <input className="radio-btn radio-btn-2" type="radio" name="sample" />

          <input className="radio-btn radio-btn-3" type="radio" name="sample" />
        </div>
        <button className="atc-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
