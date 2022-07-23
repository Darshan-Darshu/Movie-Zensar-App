import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../component/main/Sidebar/Sidebar";

function Update() {
  const params = useParams();
  const [name, setName] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState();
  const [language, setLanguage] = useState();
  const [production, setProduction] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let controller = new AbortController();

    const fetchMovie = async () => {
      try {
        const movieRes = await fetch(
          `http://localhost:3001/games/game/${params.id}`
        );

        const movieData = await movieRes.json();

        setName(movieData.name);
        setGenre(movieData.genre);
        setRating(movieData.rating);
        setLanguage(movieData.language);
        if (!movieData.production) {
          setProduction("");
        } else {
          setProduction(movieData.production);
        }

        controller = null;
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();

    return () => {
      controller?.abort();
    };
  }, [params.id]);

  const updatedForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updateData = {
      name,
      genre,
      rating,
      language,
      production,
    };

    try {
      const movieRes = await fetch(
        `${process.env.REACT_APP_SERVER_API}/games/game/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );

      const result = await movieRes.json();
      console.log(result.err);

      if (result.err) {
        alert(result.err);
      } else {
        alert("/Successful");
      }

      setIsLoading(false);

      setName("");
      setGenre("");
      setRating("");
      setLanguage("");

      navigate("/movies/allmovies");
    } catch (err) {
      alert("error", err.message);
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Sidebar />
      {isLoading && <h1>Loading....</h1>}
      <div className='movieForm'>
        <h1>Update Movie</h1>

        <form onSubmit={updatedForm} autoComplete='off'>
          <div>
            <label htmlFor='moviename'>Name</label>
            <input
              type='text'
              id='moviename'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor='rating'>Rating (1 - 100)</label>
            <input
              type='number'
              id='rating'
              min='1'
              max='100'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='production'>Production</label>
            <input
              type='text'
              id='production'
              value={production}
              onChange={(e) =>
                setProduction(e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor='genre'>Genre</label>
            <select
              id='genre'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}>
              <option value=''>---Select----</option>
              <option value='action'>Action</option>
              <option value='romantic'>Romantic</option>
              <option value='drama'>Dramantic</option>
              <option value='popular'>Popular</option>
            </select>
          </div>
          <div>
            <label htmlFor='language'>Language</label>
            <select
              id='genre'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}>
              <option value='kannada'>Kannada</option>
              <option value='english'>English</option>
              <option value='telugu'>Telugu</option>
              <option value='tamil'>Tamil</option>
              <option value='hindi'>Hindi</option>
              <option value='malayalam'>Malayalam</option>
            </select>
          </div>
          <div>
            <label htmlFor='achievements'>
              Achievements
            </label>
            <select id='achievements'>
              <option value=''>---Select----</option>
              <option value='national'>National</option>
              <option value='fifa'>FiFa</option>
              <option value='state'>State</option>
              <option value='internation'>
                internation
              </option>
            </select>
          </div>

          <button type='submit'>Next</button>
        </form>
      </div>
    </main>
  );
}

export default Update;
