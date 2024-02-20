import './MoviesCard.css';
import picture1 from '../../../images/pic__COLOR_pic.jpg';
import DeleteButton from '../Button/DeleteButton/DeleteButton.jsx';
import LikeButton from '../Button/LikeButton/LikeButton.jsx';

function MoviesCard({ name }) {

    return(
        <li className='movies-card'>
            <img className='movies-card__picture' alt='постер фильма' src={picture1} />
            <div className='movies-card__info'>
                <div className='movies-card__info-box'>
                    <h2 className='movies-card__title'>33 слова о дизайне</h2>  
                </div>
                {name === 'movies' ? (<LikeButton></LikeButton>) : (<DeleteButton></DeleteButton>)}
            </div>
            <p className='movies-card__time'>1ч42м</p>  
        </li>
    );
}

export default MoviesCard;
