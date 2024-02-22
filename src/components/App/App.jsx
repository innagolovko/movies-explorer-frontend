import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Account from '../Account/Account.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className='page__content'>
          <Routes>
            <Route path='*' component={NotFound} />
            <Route path='/'
              element={
                <>
                  <Navigate to='/' replaсe />
                  <Account name='account' />
                  <Header name='promo' />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route path='/movies'
              element={
                <>
                  <Header name='movies' />
                  <Movies />
                  <Footer />
                </>
              }
            />
            <Route path='/saved-movies'
              element={
                <>
                  <Header name='movies' />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route path='/profile'
              element={
                <>
                  <Header name='movies' />
                  <Profile />
                </>
              }
            />
            <Route path='signup'
              element={
                <>
                  <Register name='signup' />
                </>
              }
            />
            <Route path='signin'
              element={
                <>
                  <Login name='signin' />
                </>
              }
            />
            <Route path='/profile'
              element={
                <>
                  <Header name='movies' />
                  <Profile name='profile' />
                </>
              }
            />
            <Route path='/notfound'
              element={
                <>
                  <NotFound />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
