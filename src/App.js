import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import {} from "dotenv/config";

import "./App.css";
import Movie from "./routes/movie/Movie";
import NavBar from "./component/header/NavBar";
import MovieForm from "./routes/movieForm/MovieForm";
import MovieImage from "./routes/movieForm/MovieImage";
import AllMovie from "./routes/allmovie/AllMovie";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Signup/Login";
import Root from "./routes/Root";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Update from "./routes/update/Update";
import Language from "./routes/langauge/Language";
import MovieList from "./routes/langauge/MovieList";
import LanguageMovie from "./routes/allmovie/LanguageMovie";
import ProductionMovie from "./routes/allmovie/ProductionMovie";

import TopRated from "./routes/allmovie/TopRated";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route
            exact
            path='/'
            element={
              user ? (
                <Root />
              ) : (
                <Navigate replace to='/login' />
              )
            }
          />
          <Route
            exact
            path='/movie/:id'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <Movie />
              )
            }
          />

          <Route
            exact
            path='/movie/create'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <MovieForm />
              )
            }
          />
          <Route
            exact
            path='/movie/create/image'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <MovieImage />
              )
            }
          />
          <Route
            exact
            path='/movies/movie/update/:id'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <Update />
              )
            }
          />
          <Route
            exact
            path='/movies/allmovies'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <AllMovie />
              )
            }
          />
          <Route
            exact
            path='/movies/allmovie/:language'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <LanguageMovie />
              )
            }
          />
          <Route
            exact
            path='/movies/:production'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <ProductionMovie />
              )
            }
          />
          <Route
            exact
            path='/movies/allmovies/top-rated'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <TopRated />
              )
            }
          />
          <Route
            exact
            path='/movies/languages'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <Language />
              )
            }
          />
          <Route
            exact
            path='/movies/movie'
            element={
              !user ? (
                <Navigate replace to='/login' />
              ) : (
                <MovieList />
              )
            }
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
