import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import CurrentUserContext from '../../context/CurrentUserContext.js';
import SendContext from '../../context/SendContext.js';
import ErrorContext from '../../context/ErrorContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import apiMain from '../../utils/MainApi.js';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../Movies/SavedMovies/SavedMovies.jsx';

function App() {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(true);         // пользователь логин
    const [isSend, setIsSend] = useState(false);             // отправка
    const [isError, setIsError] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);      // сохранённые фильмы
    const [isCheckToken, setIsCheckToken] = useState(true);  // проверка токена при входе
    const [isEdit, setIsEdit] = useState(true);             // редактирование профиля
    const [isSuccess, setIsSuccess] = useState(false);       // успешное редактирование профиля
   
    const {pathname} = useLocation();
    // const headerView = ['/', '/movies', '/saved-movies', '/profile'].includes(pathname);
    const footerView = ['/', '/movies', '/saved-movies'].includes(pathname);

   /* const setSuccess = useCallback(() => {
        setIsSuccess(true)
    }, []) */
    
    function handleDeleteMovie(deletemovieId) {
        apiMain.deleteMovie(deletemovieId, localStorage.jwt)
            .then(() => {
                setSavedMovies(savedMovies.filter(movie => {
                    return movie._id !== deletemovieId
                }))
            })
            .catch((error) => console.error(`Ошибка при удалении фильма ${error}`))
    }

    function handleToggelMovie(data) {
        console.log(data)
        const isAdd = savedMovies.some(element => data.id === element.movieId)
        const seachClickMovie = savedMovies.filter((movie) => {
            return movie.movieId === data.id
        })
        if (isAdd) {
            handleDeleteMovie(seachClickMovie[0]._id)
        } else {
            apiMain.addMovie(data, localStorage.jwt)
                .then(res => {
                    setSavedMovies([res, ...savedMovies])
                })
                .catch((error) => console.error(`Ошибка при установке лайка ${error}`))
        }
    }

    function handleLogin(email, password) {
        setIsSend(true)
        apiMain.authorization(email, password)
            .then(res => {
                console.log(res)
                // localStorage.setItem('loggedIn', true)
                localStorage.setItem('jwt', res.token)
                setLoggedIn(true)
                navigate('/movies')
            })
            .catch((error) => {
                setIsError(true)
                console.error(`Ошибка при авторизации ${error}`)
            })
            .finally(() => setIsSend(false))
    }

    function handleRegister(username, email, password) {
        setIsSend(true)
        apiMain.registration(username, email, password)
            .then((res) => {
                console.log(res)
                if (res) {
                    setLoggedIn(false)
                    apiMain.authorization(email, password)
                        .then(res => {
                            console.log(res)
                            localStorage.setItem('jwt', res.token)
                            setLoggedIn(true)
                            navigate('/movies')
                        })
                        .catch((error) => {
                            setIsError(true)
                            console.error(`Ошибка при авторизации ${error}`)
                        })
                        .finally(() => setIsSend(false))
                }
            })
            .catch((error) => {
                setIsError(true)
                console.error(`Ошибка при регистрации ${error}`)
            })
            .finally(() => setIsSend(false))
    }

    function logOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
    }

    function editUserData(username, email) {
        setIsSuccess(false)
        setIsSend(true)
        apiMain.setUserInfo(username, email, localStorage.jwt)
            .then(res => {
               // console.log(res)
                setCurrentUser(res)
                setIsEdit(false)
                setIsSuccess(true)
            })
            .catch((error) => {
                setIsError(true)
                console.error(`Ошибка при редактировании данных пользователя ${error}`)
            })
            .finally(() => setIsSend(false))
    }

    useEffect(() => {
        if (localStorage.jwt) {
            Promise.all([apiMain.getUserData(localStorage.jwt), apiMain.getMovies(localStorage.jwt)])
                .then(([userData, dataMovies]) => {
                    setSavedMovies(dataMovies)  // setSavedMovies(dataMovies.reverse())
                    setCurrentUser(userData)
                    setLoggedIn(true)
                    setIsCheckToken(false)
                    // localStorage.clear()
                })
                .catch((error) => console.error(`Ошибка при загрузке начальных данных ${error}`))
            setIsCheckToken(false)
        } else {
            setLoggedIn(false)
            setIsCheckToken(false)
            localStorage.clear()
        }
    }, [loggedIn])

    return (
        <div className='page'>
            <div className='page__content'>
                {
                    isCheckToken
                        ? <Preloader/>
                        : (
                            <CurrentUserContext.Provider value={currentUser}>
                                <SendContext.Provider value={isSend}>
                                    <ErrorContext.Provider value={isError}>
                                        <Routes>
                                            <Route
                                                path='/signin'
                                                element={
                                                    loggedIn
                                                        ? <Navigate to='/' replaсe/>
                                                        :
                                                        <Main name='signin' onLogin={handleLogin} setIsError={setIsError}/>
                                                }
                                            />

                                            <Route
                                                path='/signup'
                                                element={
                                                    loggedIn
                                                        ? <Navigate to='/' replaсe/>
                                                        : <Main name='signup' onRegister={handleRegister}
                                                                setIsError={setIsError}/>
                                                }
                                            />

                                            <Route
                                                path='/profile'
                                                element={
                                                    <>
                                                        <Header name='profile' loggedIn={loggedIn}/>
                                                        <ProtectedRoute
                                                            loggedIn={loggedIn}
                                                            element={Profile}
                                                            name='profile'
                                                            logOut={logOut}
                                                            editUserData={editUserData}
                                                            setIsError={setIsError}
                                                            isSuccess={isSuccess}
                                                            setSuccess={setIsSuccess}
                                                            setIsEdit={setIsEdit}
                                                            isEdit={isEdit}
                                                            savedMovies={savedMovies}
                                                        />
                                                    </>
                                                }
                                            />

                                            <Route
                                                path='/'
                                                element={
                                                    <>
                                                        <Header name='promo' loggedIn={loggedIn}/>
                                                        <Main name='promo'/>
                                                        {/*  <Footer /> */}
                                                    </>
                                                }
                                            />

                                            <Route path='/movies'
                                                   element={
                                                       <>
                                                           <Header name='movies' loggedIn={loggedIn}/>
                                                           <ProtectedRoute
                                                               loggedIn={loggedIn}
                                                               element={Movies}
                                                               name='movies'
                                                               savedMovies={savedMovies}
                                                               addMovie={handleToggelMovie}
                                                               setIsError={setIsError}
                                                           />
                                                       </>
                                                   }
                                            />

                                            <Route path='/saved-movies'
                                                   element={
                                                       <>
                                                           <Header name='saved-movies' loggedIn={loggedIn}/>
                                                           <ProtectedRoute
                                                               loggedIn={loggedIn}
                                                               element={SavedMovies}
                                                               name='savedmovies'
                                                               savedMovies={savedMovies}
                                                               onDelete={handleDeleteMovie}
                                                               setIsError={setIsError}
                                                           />
                                                       </>
                                                   }
                                            />

                                            <Route path='*' element={<Main name='notfound'/>}/>
                                        </Routes>

                                        {footerView && <Footer/>}
                                    </ErrorContext.Provider>
                                </SendContext.Provider>
                            </CurrentUserContext.Provider>
                        )
                }
            </div>
        </div>
    );
}

export default App;
