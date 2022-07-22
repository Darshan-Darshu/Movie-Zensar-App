import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, name }) {
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
    <div className='movie'>
      <Link to={`/movie/${id}`}>
        {image && (
          <>
            <img src={image} alt={name} />
            <div className='blur'></div>
          </>
        )}
      </Link>
    </div>
  );
}

export default Movie;
