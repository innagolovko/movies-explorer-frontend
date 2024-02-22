import './Movies.css';
import SearchForm from './SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';

function Movies() {

    return(
        <>
            <main className='movies'>
                <SearchForm />
                <MoviesCardList name='movies' />
            </main>
        </>
    )
}

export default Movies
