import React, { useEffect, useState } from "react";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import { getAllMovies } from "../../utils";
import Movie from "./Movie";
import "./AllMovie.css";

function TopRated() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      const data = await getAllMovies();
      console.log(data);

      const toprated = await data.sort((a, b) => {
        return b.rating - a.rating;
      });

      setGames(toprated);
      setLoading(false);
      controller = null;
    };

    fetchData();

    return () => {
      controller?.abort();
    };
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='allmovie'>
        <div className='allmovie__container'>
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <>
              <h2>Top Rated</h2>
              <div className='allmovie__images'>
                {games &&
                  games.map((game, index) => (
                    <Movie key={game._id} id={game._id} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default TopRated;
