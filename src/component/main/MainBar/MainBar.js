import React from "react";
import { useEffect, useState } from "react";
import MainAds from "./MainAds/MainAds";

import "./MainBar.css";
import MainGame from "./MainGame";
import MainPoster from "./MainPoster/MainPoster";
import { getAllMovies } from "../../../utils";

function MainBar() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      const data = await getAllMovies();
      console.log(data);
      setGames(data);
      setLoading(false);
      controller = null;
    };

    fetchData();

    return () => {
      controller?.abort();
    };
  }, []);

  return (
    <div className='mainBar'>
      <MainPoster />
      {loading ? (
        <div className='loaders'>
          <div className='loader'>
            <h1>Loading....</h1>
          </div>
          <div className='loader loader__two'>
            <h1>Loading....</h1>
          </div>
          <div className='loader loader__three'>
            <h1>Loading....</h1>
          </div>
        </div>
      ) : (
        <div className='mainBar__cards'>
          <h1>Popular</h1>

          <div className='mainBar__images'>
            {games &&
              games.map((game, index) =>
                index < 6 ? (
                  <MainGame
                    id={game._id}
                    key={game._id}
                    name={game.name}
                    genre={game.genre}
                    rating={game.rating}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        </div>
      )}
      {loading ? (
        <div className='loaders'>
          <div className='loader'>
            <h1>Loading....</h1>
          </div>
          <div className='loader loader__two'>
            <h1>Loading....</h1>
          </div>
          <div className='loader loader__three'>
            <h1>Loading....</h1>
          </div>
        </div>
      ) : (
        <div className='mainBar__cards'>
          <h1>Most Viewed</h1>

          <div className='mainBar__images'>
            {games &&
              games.map((game, index) =>
                index > 5 && index < 12 ? (
                  <MainGame
                    id={game._id}
                    key={game._id}
                    name={game.name}
                    genre={game.genre}
                    rating={game.rating}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        </div>
      )}
      <MainAds />
    </div>
  );
}

export default MainBar;
