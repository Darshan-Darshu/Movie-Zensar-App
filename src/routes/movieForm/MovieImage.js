import React, { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Sidebar from "../../component/main/Sidebar/Sidebar";
import "./MovieImage.css";

function MovieImage() {
  const [query] = useSearchParams();
  const name = query.get("name");
  const genre = query.get("genre");
  const rating = query.get("rating");
  const language = query.get("language");
  const production = query.get("production");
  const [imageUpload, setImageUpload] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendFormData = async (data) => {
    try {
      const responseFormData = await fetch(
        `${process.env.REACT_APP_SERVER_API}/games/game`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res = await responseFormData.json();

      return res;
    } catch (e) {
      console.log(e.message);
      alert("please provide movie info");
    }
  };

  const sendImage = async (id, fileImage) => {
    try {
      const formData = new FormData();
      formData.append("image", fileImage[0]);

      const response = await fetch(
        `${process.env.REACT_APP_SERVER_API}/games/game/image/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status !== (200 || 201)) {
        const deleteRes = await fetch(
          `${process.env.REACT_APP_SERVER_API}/games/game/${id}`,
          {
            method: "DELETE",
          }
        );
        alert("Please provide image properties");

        console.log(deleteRes);
      }
    } catch (e) {
      const deleteRes = await fetch(
        `${process.env.REACT_APP_SERVER_API}/games/game/${id}`,
        {
          method: "DELETE",
        }
      );

      console.log(deleteRes);
      alert("Please provide image properties");
    }
  };

  const submitMovie = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const data = {
        name,
        genre,
        rating,
        language,
        production,
      };

      if (!imageUpload) {
        return alert("Please upload the files");
      }

      const uploadImage = await sendFormData(data);

      await sendImage(uploadImage._id, imageUpload);
      alert(`Successful!!!`);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      alert(`Something Went wrong`);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Sidebar />
      <div className='movieImage'>
        <form onSubmit={submitMovie}>
          <div>
            <label htmlFor='imageupload'>
              Image Upload
            </label>
            <input
              type='file'
              id='imageupload'
              onChange={(e) =>
                setImageUpload(e.target.files)
              }
              required
            />
          </div>
          <button type='submit' disabled={isLoading}>
            Create Movie
          </button>
          {isLoading && <h1>Loading....</h1>}
        </form>
      </div>
    </main>
  );
}

export default MovieImage;
