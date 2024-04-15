import './SavedMovies.css';
// import MoviesCard from '../Movies/MoviesCard/MoviesCard.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import { useCallback, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';

function SavedMovies({savedMovies, onDelete, setIsError }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchedMovie, setSearchedMovie] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [firstEntrance, setFirstEntrance] = useState(true);

    const filter = useCallback((search, isCheck, movies) => {
        setSearchedMovie(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        setFirstEntrance(false)
        filter(search, isCheck, savedMovies)
    }

    useEffect(() => {
        if (savedMovies.length === 0) {
           setFirstEntrance(true) 
        } else {
            setFirstEntrance(false)
        }
         filter (searchedMovie, isCheck, savedMovies)
    }, [filter, savedMovies, isCheck, searchedMovie])
    
    function changeShort() {
        if (isCheck) {
            setIsCheck(false)
            setFirstEntrance(false)
            filter (searchedMovie, false, savedMovies)
        } else {
            setIsCheck(true)
            setFirstEntrance(true)
            filter (searchedMovie, true, savedMovies)
        }
    }

    return(
        <>
            <main className='saved-movies'>
                <SearchForm 
                    isCheck={isCheck}
                    searchMovies={searchMovies}
                    searchedMovie={searchedMovie}
                    changeShort={changeShort}
                    setIsError={setIsError}
                    firstEntrance={firstEntrance}
                    savedMovies={savedMovies}
                /> 

                <MoviesCardList
                    movies={filteredMovies}
                    onDelete={onDelete}
                    firstEntrance={firstEntrance}
                />
            </main>
        </>
    );
}

export default SavedMovies;
