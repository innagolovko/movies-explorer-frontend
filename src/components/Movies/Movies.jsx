import './Movies.css';
import apiMovies from '../../utils/MoviesApi.js';
import {useCallback, useEffect, useState} from 'react';
import SearchForm from './SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';

function Movies({setIsError, addMovie, savedMovies}) {
    const [allMovies, setAllMovies] = useState([])                // все фильмы с сервера
    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchedMovie, setSearchedMovie] = useState('')        // строка поиска
    const [isCheck, setIsCheck] = useState(false)                 // переключение короткометражек
    const [isLoading, setIsLoading] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [firstEntranse, setFirstEntranse] = useState(true)       // блокировка переключателя

    const filter = useCallback((search, isCheck, movies) => {
        // кладём в localStorage: 'movie' - строка в input; 'shorts' - положение чекбокса; 'allmovies' - все фильмы
        localStorage.setItem('movie', JSON.stringify(search))
        localStorage.setItem('shorts', JSON.stringify(isCheck))
        localStorage.setItem('allmovies', JSON.stringify(movies))
        setSearchedMovie(search)
        // отфильтрованные фильмы по value input
        setFilteredMovies(movies.filter((movie) => {
            // проходим по каждому фильму/на русском/нижний регистр/с включением нижнего регистра
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    // поиск фильма
    function searchMovies(search) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            apiMovies.getMovies()
                .then((res) => {
                    setAllMovies(res) // результат запроса
                    setIsCheck(false)
                    setServerError(false)
                    setFirstEntranse(false)
                    filter(search, isCheck, res) // вызываем функцию filter
                })
                .catch(error => {
                    setServerError(true)
                    console.error(`Ошибка при поиске фильма ${error}`)
                })
                .finally(() => setIsLoading(false))
        } else {
            filter(search, isCheck, allMovies)
        }
    }

    useEffect(() => {
        if (localStorage.allMovies && localStorage.shorts && localStorage.movie) {
            // достаём из localStorage
            const movies = JSON.parse(localStorage.allMovies)
            const search = JSON.parse(localStorage.movie)
            const isCheck = JSON.parse(localStorage.shorts)
            setServerError(false)
            setFirstEntranse(false)
            setSearchedMovie(search)
            setIsCheck(isCheck)
            setAllMovies(movies)
            filter(search, isCheck, movies)
        }
    }, [filter])

    // клик по чекбоксу
    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            filter(searchedMovie, false, allMovies)
        } else {
            setIsCheck(true)
            filter(searchedMovie, true, allMovies)
        }
    }

    return (
        <>
            {/* <main className='movies'> */}
            <SearchForm
                isCheck={isCheck}             // состояние чекбокса
                searchMovies={searchMovies}   // запрос поиск
                searchedMovie={searchedMovie}
                changeShort={changeShort}
                setIsError={setIsError}
                firstEntranse={firstEntranse}
            />
            <MoviesCardList // name='movies'
                movies={filteredMovies}         // отфильтрованные фильмы
                addMovie={addMovie}
                savedMovies={savedMovies}
                isLoading={isLoading}
                serverError={serverError}
                firstEntranse={firstEntranse}
            />
        </>
    );
};

export default Movies;
