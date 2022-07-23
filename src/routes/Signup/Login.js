import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLoginUser = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    loginUserDb(data);
  };

  const loginUserDb = async (data) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_SERVER_API}/users/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const userData = await response.json();

      if (userData.err) {
        return alert(
          "Check your email and password or maybe network issue"
        );
      }

      dispatch(login(userData.user));

      navigate("/");
      setIsLoading(false);
    } catch (err) {
      alert(
        "Unable to login check your password and email"
      );
      setIsLoading(false);
    }
  };

  return (
    <div className='login'>
      {isLoading && <h2>Loading...</h2>}

      <form onSubmit={submitLoginUser} autoComplete={"off"}>
        <div className='container'>
          <h1>Login User</h1>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' disabled={isLoading}>
            Login
          </button>
          <p>
            If you don't have any account you can create one
            here
          </p>
          <Link to='/signup'>Create an account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
