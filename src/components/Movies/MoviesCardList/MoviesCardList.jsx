import React from 'react';
// import PropTypes from 'prop-types';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import LoadButton from '../Button/LoadButton/LoadButton.jsx';

function MoviesCardList({ name }) {
   
    return(
        
        <section className='page__movies-card-list' aria-label='Галерея'>
            <Preloader></Preloader>
           
                <ul className='movies-list'>

                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />
                    <MoviesCard name={name} />

                   {/* {cardsData.map((film) => {
                        return (
                            <MoviesCard card={film}
                                key={film.id}
                                name={film.name}
                                duration={film.duration}
                                image={film.image}
                            />
                        )
                    })}   
                
                    {showLoadButton === 'default' && (
                        <div className='movies-card__button-load'>
                            <LoadButton
                                text='Ещё'
                                label='загрузка карточек'
                                disabled={true}
                                onClick={() => {}}
                            />
                        </div>
                    )} */}

                    </ul> 
                      {name === 'movies' ? (<LoadButton />) : (<LoadButton name={name} disabled={true} />)} 
                    
        </section>
    );
}

  /*MoviesCardList.propTypes = {
    showLoadButton: PropTypes.oneOf(['default', 'saved']),
    cardsData: PropTypes.orrayOf(PropTypes.any).isRequired,
 };

 MoviesCardList.defaultProps = {
    showLoadButton: 'default',
 }; */

export default MoviesCardList
