import './SavedMovies.css';
// import PropTypes from 'prop-types';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
// import MoviesCard from '../Movies/MoviesCard/MoviesCard.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.jsx';

function SavedMovies({showLoadButton}) {

    return(

        <main className='saved-movies'>
            <SearchForm /> 
            <MoviesCardList />
        </main>
    )
}

export default SavedMovies
