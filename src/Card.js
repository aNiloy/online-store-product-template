import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bulbImg from "./assets/bulbasaur.jpg";
import charImg from "./assets/charmander.jpg";
import squirtImg from "./assets/squirtle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = () => {

  const [cardData, setCardData] = useState({color:"", qty:0, size:""});

  const [qty, setQty] = useState(0);

  const [image, setImage] = useState(bulbImg);

  const [color, setColor] = useState('Green')

  const [size, setSize] = useState("S");

  console.log(color, qty, size)

  const decrement = () => {
    setQty(qty - 1);
  };

  const increment = () => {
    setQty(qty + 1);
  };

  const onQtyChange = (e) => {
    setQty(parseInt(e.target.value))
  }

  const changeImage = (image, color) => {
    setImage(image)
    setColor(color)
  }

  const changeSize = (e) => {
    setSize(e.target.value)
  }

  const addToCart = () => {
    setCardData({color: color, qty: qty, size: size})
    toast.success('Added to cart', {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1500})
  }
  
  console.log(cardData)

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={image} alt="shoe" />
      </div>
      <div className="info">
        <h2>Pokemon Plushie</h2>
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
          <input className="input-field" type="number" onChange={onQtyChange} value={qty}/>
          <button onClick={increment} className="qty-btn">
            +
          </button>
        </div>
        <div className="size-variants">
          <span>Choose a size: </span>
          <select className="size-select" name="" id="" onChange={changeSize}> 
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div className="var-select">
          <p>Choose a variant:</p>
          <input onClick={() => changeImage(bulbImg, 'Green')} className="radio-btn radio-btn-1" type="radio" name="sample" />

          <input onClick={() => changeImage(charImg, 'Red')} className="radio-btn radio-btn-2" type="radio" name="sample" />

          <input onClick={() => changeImage(squirtImg, 'Blue')} className="radio-btn radio-btn-3" type="radio" name="sample" />
        </div>
        <button className="atc-btn" onClick={addToCart}>Add to Cart</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Card;
