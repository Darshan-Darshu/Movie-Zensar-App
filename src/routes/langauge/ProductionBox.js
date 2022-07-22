import React from "react";
import { Link } from "react-router-dom";
import "./LanguageBox.css";

function ProductionBox({ production, img, video }) {
  return (
    <Link to={`/movies/${production}`}>
      <div className='languageBox'>
        <img src={img} alt='' />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </Link>
  );
}

export default ProductionBox;
