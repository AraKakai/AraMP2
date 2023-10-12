import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="FooterDetails">
        <h2> Pangan Coco Lumber Trading </h2>
        <p>2209 Commonwealth Ave. Quezon City, Philippines</p>
        <p>09978539884 / 09154789914 / 09084043285 </p>
      </div>
    </div>
  );
};
