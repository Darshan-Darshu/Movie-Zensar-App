import React, { useEffect, useState } from "react";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import { getAllMovies } from "../../utils";
import Movie from "./Movie";
import "./AllMovie.css";
import { useParams } from "react-router";

function LanguageMovie() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      const data = await getAllMovies();
      setGames(data);
      setLoading(false);
      controller = null;
    };

    fetchData();

    return () => {
      controller?.abort();
    };
  }, []);
  console.log(params.production, games);

  return (
    <main>
      <Sidebar />
      <div className='allmovie'>
        <div className='allmovie__container'>
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <>
              <h2>{params.production}</h2>
              <div className='allmovie__images'>
                {games &&
                  games.map((game, index) =>
                    params.production ===
                    game.production ? (
                      <Movie key={game._id} id={game._id} />
                    ) : (
                      ""
                    )
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default LanguageMovie;
