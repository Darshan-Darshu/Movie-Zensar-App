import React, { useEffect, useState } from "react";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import { getAllMovies } from "../../utils";
import Movie from "./Movie";
import "./AllMovie.css";
import { useLocation, useNavigate } from "react-router";

function AllMovie() {
  const [games, setGames] = useState();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState();
  const [isValid, setIsvalid] = useState(true);

  const query = useLocation();
  const navigate = useNavigate();
  const search = query.search.substring(7);

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

  const formFilter = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/movies/allmovies",
      search: filter !== "" ? `?genre=${filter}` : "",
    });
  };

  return (
    <main>
      <Sidebar />
      <div className='allmovie'>
        <div className='filter'>
          <form onSubmit={formFilter}>
            <select
              id=''
              onChange={(e) => {
                setIsvalid(false);
                setFilter(e.target.value);
              }}>
              <option value=''>All Movies</option>
              <option value='action'>Action</option>
              <option value='romantic'>Romantic</option>
              <option value='drama'>Dramantic</option>
              <option value='popular'>Popular</option>
            </select>
            <button
              type='submit'
              disabled={isValid}
              className={`${isValid ? "disabled" : "btn"}`}>
              Filter
            </button>
          </form>
        </div>
        <div className='allmovie__container'>
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <div className='allmovie__images'>
              {games ? (
                games.map((game, index) =>
                  search ? (
                    search === game.genre && (
                      <Movie key={game._id} id={game._id} />
                    )
                  ) : (
                    <Movie key={game._id} id={game._id} />
                  )
                )
              ) : (
                <h1>
                  Something went wrong!!!! sorry try again
                  later
                </h1>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AllMovie;
