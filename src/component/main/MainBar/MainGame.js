import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainGame.css";

function MainGame({ id, name }) {
  const [image, setImage] = useState();

  useEffect(() => {
    let controller = new AbortController();

    const fetchImage = async () => {
      try {
        const imageData =
          await `${process.env.REACT_APP_SERVER_API}/games/game/image/${id}`;

        setImage(imageData);
        controller = null;
      } catch (e) {
        console.log(e);
      }
    };

    fetchImage();

    return () => {
      controller?.abort();
    };
  }, [id]);

  return (
    <Link to={`/movie/${id}`} className='mainGame'>
      {image && <img src={image} alt={name} />}
      <div className='hoverGame'></div>
    </Link>
  );
}

export default MainGame;
