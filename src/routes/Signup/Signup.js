import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitCreateUser = (e) => {
    e.preventDefault();
    setDisabled(true);

    console.log(username, email, password);

    const data = {
      username,
      email,
      password,
    };

    createUserDb(data);
  };

  const createUserDb = async (data) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_API}/users`,
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
        return alert(userData.err);
      }

      dispatch(userData.user);
      navigate("/");
    } catch (err) {
      alert(
        "Some Error maybe user is already created are check ones"
      );
    }
  };

  return (
    <div className='signup'>
      <form
        onSubmit={submitCreateUser}
        autoComplete={"off"}>
        <div className='container'>
          <h1>Create Account</h1>

          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <button type='submit' disabled={disabled}>
            Create Account
          </button>
          <p>
            already have an account{" "}
            <span>
              <Link to='/login'>Login into My account</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
