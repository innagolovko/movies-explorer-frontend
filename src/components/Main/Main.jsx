import './Main.css';
import Promo from './Promo/Promo.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Profile from '../Profile/Profile.jsx';
import SavedMovies from '../Movies/SavedMovies/SavedMovies.jsx';
import Movies from '../Movies/Movies.jsx';
import NavTab from './NavTab/NavTab.jsx';
import NotFound from "../NotFound/NotFound";

function Main({
                  name,
                  onRegister,
                  onLogin,
                  logOut,
                  editUserData,
                  setIsError,
                  savedMovies,
                  onDelete,
                  addMovie,
                  setSuccess,
                  isSuccess,
                  setIsEdit,
                  isEdit
              }) {

    return (
        <main className='main'>
            {{
                notfound: <NotFound />,
                promo:
                    <>
                        <Promo/>
                        <NavTab/>
                        <AboutProject/>
                        <Techs/>
                        <AboutMe/>
                        <Portfolio/>
                    </>,
                signup: <Register name={name} onRegister={onRegister} setIsError={setIsError}/>,
                signin: <Login name={name} onLogin={onLogin} setIsError={setIsError}/>,
                profile: <Profile
                    name={name}
                    logOut={logOut}
                    editUserData={editUserData}
                    setIsError={setIsError}
                    isSuccess={isSuccess}
                    setSuccess={setSuccess}
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}
                />,
                movies:
                    <>
                        <Movies savedMovies={savedMovies} addMovie={addMovie} setIsError={setIsError}/>
                    </>,
                savedmovies:
                    <>
                        <SavedMovies savedMovies={savedMovies} onDelete={onDelete} setIsError={setIsError}/>
                    </>
            }[name]}
        </main>
    );
}

export default Main;
