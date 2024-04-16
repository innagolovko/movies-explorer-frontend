import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MoviesCard({ onDelete, addMovie, data, savedMovies }) {
    const { pathname } = useLocation();
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (pathname === '/movies')
        setClick(savedMovies.some(element => data.id === element.movieId))
    }, [savedMovies, data.id, setClick, pathname])

    function onClick() {
        if (savedMovies.some(element => data.id === element.movieId)) {
            setClick(true)
            addMovie(data)
        } else {
            setClick(false)
            addMovie(data)
        }
    }

    function convertTime(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);
        return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
    }

    return(
        <li className='movies__card'>
            <article>
                <Link to={data.trailerLimk} target='_blank'>
                    <img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} className='movies__pic' alt={data.name} />
                </Link>
                <div className='movies__card-info'>
                    <div className='movies__card-text'>
                        <p className='movies__subtitle'>{data.nameRU}</p>  
                    </div>
                        {pathname === '/movies' ?
                            <button type='button' className={`movies__save ${click ? 'movies__save_active' : ''}`} onClick={onClick}></button>
                            :
                            <button type='button' className={`movies__save movies__save_type_delete`} onClick={() => onDelete(data._id)}></button>
                        }      
                </div>
                <p className='movies__duration'>{convertTime(data.duration)}</p>
            </article>  
        </li>
    );
}

export default MoviesCard;
