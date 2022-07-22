import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import "./MovieForm.css";

function MovieForm() {
  const [name, setName] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState();
  const [language, setLanguage] = useState();
  const [production, setProduction] = useState();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    navigate(
      `/movie/create/image?name=${name}&genre=${genre}&rating=${rating}&language=${language}&production=${production}`
    );

    setName("");
    setGenre("");
    setRating();
  };

  console.log(language);

  return (
    <main>
      <Sidebar />
      <div className='movieForm'>
        <h1>Movie Creation</h1>
        <form onSubmit={submitForm} autoComplete='off'>
          <div>
            <label htmlFor='moviename'>Name</label>
            <input
              type='text'
              id='moviename'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor='rating'>Rating</label>
            <input
              type='number'
              id='rating'
              min='1'
              max='100'
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='production'>Production</label>
            <input
              type='text'
              id='production'
              onChange={(e) =>
                setProduction(e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor='genre'>Genre</label>
            <select
              id='genre'
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
              id='langauge'
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

export default MovieForm;
