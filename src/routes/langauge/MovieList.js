import React from "react";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import ProductionBox from "./ProductionBox";

import "./Language.css";

function MovieList() {
  return (
    <div className='language'>
      <Sidebar />

      <div className='language__container'>
        <ProductionBox
          production='disney'
          img='/images/viewers-disney.png'
          video='/videos/1564674844-disney.mp4'
        />
        <ProductionBox
          production='pixar'
          img='/images/viewers-pixar.png'
          video='/videos/1564676714-pixar.mp4'
        />
        <ProductionBox
          production='marvel'
          img='/images/viewers-marvel.png'
          video='/videos/1564676115-marvel.mp4'
        />
        <ProductionBox
          production='star wars'
          img='/images/viewers-starwars.png'
          video='/videos/1608229455-star-wars.mp4'
        />
        <ProductionBox
          production='english'
          img='/images/viewers-national.png'
          video='/videos/1564676296-national-geographic.mp4'
        />
      </div>
    </div>
  );
}

export default MovieList;
