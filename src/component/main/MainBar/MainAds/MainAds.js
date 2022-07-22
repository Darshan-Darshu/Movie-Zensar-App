import React from "react";
import "./MainAds.css";

function MainAds() {
  return (
    <div className='mainAds'>
      <div className='mainAds__image'>
        <img
          src='https://pbs.twimg.com/media/EbXVbwQWkAYlLyP?format=jpg&name=medium'
          alt=''
        />
      </div>
      <div className='mainAds__info'>
        <h1>Movie Name</h1>
        <p className='description'>
          description: Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo,
          temporibus alias iusto earum repellendus ex eaque
          excepturi cumque dolores id, assumenda
          exercitationem libero ratione reprehenderit eius
          quasi, totam quae officia? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Explicabo,
          temporibus alias iusto earum repellendus ex eaque
          excepturi cumque dolores id, assumenda
          exercitationem libero ratione reprehenderit eius
          quasi, totam quae officia?
        </p>
        <p>rating: 10</p>
        <p className='genre'>Genre: Actions</p>
        <button>Click</button>
      </div>
    </div>
  );
}

export default MainAds;
