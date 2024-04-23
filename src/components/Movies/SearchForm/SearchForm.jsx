import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import './SearchForm.css';
import ErrorContext from '../../../context/ErrorContext.js';
import useFormValidation from '../../../utils/useFormValidation.js';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ isCheck, changeShort, searchedMovie, searchMovies, setIsError, firstEntrance, savedMovies }) {
    const { pathname } = useLocation();
    const isError = useContext(ErrorContext);
    const { values, handleChange, reset } = useFormValidation();

    useEffect(() => {
        if ((pathname === '/saved-movies' && savedMovies.lenght === 0)) {
           reset({ search: '' })
        } else {
           reset({ search: searchedMovie })
        }
        setIsError(false)
    }, [searchedMovie, reset, setIsError, savedMovies, pathname])
    
    function onSubmit(event) {
        event.preventDefault()
        if (event.target.search.value) {
            // не пустая строка
           searchMovies(event.target.search.value)
           setIsError(false)
        } else {
            // пустая строка
           setIsError(true)
        }        
    }

    return(
        <section className='search page__search'>
            <div className='search__container'>
                <form noValidate className='search__form' name={'SearchForm'} onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='search'
                        className='search__input'
                        placeholder='Фильм'
                        value={values.search || ''}
                        onChange={(event) => {
                            handleChange(event)
                            setIsError(false)
                        }}
                        disabled={savedMovies ? (savedMovies.lenght === 0 && true) : false}
                        required
                    />

                    <button type='submit' 
                      className={`search__button ${savedMovies ? (pathname === '/saved-movies' && savedMovies.lenght === 0) && 'search__button' : ''}`}>
                        Найти
                    </button>   
                </form>
                    <span className={`search__error ${isError && 'search__error_active'}`}>{isError && 'Введите ключевое слово'}</span>
                 
                 <FilterCheckbox isCheck={isCheck} changeShort={changeShort}  firstEntrance={firstEntrance} />
            </div>   
        </section>
    );
}

export default SearchForm;
