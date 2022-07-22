import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import "./NavBar.css";

function NavBar() {
  const user = useSelector(selectUser);
  return (
    <nav>
      <h1>
        <NavLink to='/'>
          Zensar <span>App</span>
        </NavLink>
      </h1>
      <ul>
        {user && (
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink to='/movie/create'>Create</NavLink>
          </li>
        )}
        {user && (
          <li className='abort'>
            <NavLink to='/movies/languages'>
              Language
            </NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to='/signup'>Sign up</NavLink>
          </li>
        )}
        <li>
          {!user ? (
            <NavLink to='/login'>Sign In</NavLink>
          ) : (
            <img
              src='https://admitoffer.com/images/site/user-img.png'
              alt=''
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
