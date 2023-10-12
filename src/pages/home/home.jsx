import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";

export const Home = () => {
  return (
    <div className="hero">
      <h1>Pangan Coco Lumber Trading</h1>
      <Link to="/shop">
  <button className="order-button">Order Now</button>
</Link>
      <p>Trusted by many, since 1991.</p>
    </div>
  );
};
