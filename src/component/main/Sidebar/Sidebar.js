import React from "react";
import { Link } from "react-router-dom";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className='sidebar'>
      <header>
        <h1>{user.username}</h1>
        <img
          src='https://admitoffer.com/images/site/user-img.png'
          alt=''
        />
      </header>
      <section>
        <ul>
          <li>
            <Link to='/movies/allmovies'>All movie</Link>
          </li>
          <li>
            <Link to='/movies/movie' className='white1'>
              movie
            </Link>
          </li>
          <li>
            <Link to='/movie/create'>Create</Link>
          </li>
          <li>
            <Link
              to='/movies/allmovies/top-rated'
              className='white1'>
              Top Rated
            </Link>
          </li>
          <li>
            <Link to='/movies/languages'>Language</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
