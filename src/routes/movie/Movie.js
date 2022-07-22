import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Sidebar from "../../component/main/Sidebar/Sidebar";

import "./Movie.css";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let controller = new AbortController();

    const fetchMovie = async () => {
      try {
        const movieRes = await fetch(
          `${process.env.REACT_APP_SERVER_API}/games/game/${params.id}`
        );

        const movieData = await movieRes.json();
        console.log(movieData);

        setMovie(movieData);

        controller = null;
      } catch (err) {
        console.log(err);
      }
    };

    const fetchImage = async () => {
      try {
        const imageData =
          await `${process.env.REACT_APP_SERVER_API}/games/game/image/${params.id}`;
        setImage(imageData);
        controller = null;
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovie();
    fetchImage();

    return () => {
      controller?.abort();
    };
  }, [params.id]);

  const deleteMovie = async () => {
    try {
      setIsLoading(true);

      await fetch(
        `${process.env.REACT_APP_SERVER_API}/games/game/${params.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      alert("Successfull");
      setIsLoading(false);
      navigate("/movies/allmovies");
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  };

  return (
    <main>
      <Sidebar />
      <div className='movie'>
        <div className='movie__main'>
          <div className='movie__mainImage'>
            {image && <img src={image} alt='' />}
            {movie && (
              <div className='movie__container'>
                <div className='movie__info'>
                  <h1>Movie: {movie.name}</h1>
                  <p>Genre: {movie.genre}</p>
                  <h4>Rating: {movie.rating} </h4>
                  <h5>Language: {movie.language}</h5>
                  <h3>
                    Description: Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Necessitatibus, magnam! Soluta unde,
                    iste atque autem reiciendis maiores
                    magni quia explicabo quod! Omnis qui,
                    tempore dolorem repellat rerum fugit
                    adipisci eos.
                  </h3>
                </div>
                <div className='buttons'>
                  <Link
                    to={`/movies/movie/update/${params.id}`}
                    className='btn'>
                    Update
                  </Link>
                  <button
                    onClick={deleteMovie}
                    className='btn'
                    disabled={isLoading}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
          {isLoading && <h1>Loading...</h1>}
        </div>
      </div>
    </main>
  );
}

export default Movie;
