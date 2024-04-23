import React, {useEffect, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../../Preloader/Preloader.jsx';
import {useLocation} from 'react-router-dom';
import {
    MaxScreen,
    MediumScreen,
    SmallScreen,
    InitMoreMaxScreen,
    InitLessMaxScreen,
    InitMediumScreen,
    InitSmallScreen,
    StepMaxScreen,
    StepMediumScreen,
    StepSmallScreen
} from '../../../utils/constants.js';


function MoviesCardList({movies, onDelete, addMovie, isLoading, savedMovies, serverError, firstEntrance}) {
    const {pathname} = useLocation();
    const [count, setCount] = useState('');
    const fact = movies.slice(0, count);

    function countCards() {
        const counter = {init: InitMoreMaxScreen, step: StepMaxScreen}  // init - начальное количество карточек; step - шаг(Ещё)
        if (window.innerWidth < MaxScreen) {
            counter.init = InitLessMaxScreen
            counter.step = StepMediumScreen
        }
        if (window.innerWidth < MediumScreen) {
            counter.init = InitMediumScreen
            counter.step = StepSmallScreen
        }
        if (window.innerWidth < SmallScreen) {
            counter.init = InitSmallScreen
            counter.step = StepSmallScreen
        }
        return counter
    }

    useEffect(() => {
        if (pathname === '/movies') {
            setCount(countCards().init)

            function countCardsForResize() {
                if (window.innerWidth >= StepMaxScreen) {
                    setCount(countCards().init)
                }
                if (window.innerWidth < StepMaxScreen) {
                    setCount(countCards().init)
                }
                if (window.innerWidth < MediumScreen) {
                    setCount(countCards().init)
                }
                if (window.innerWidth < SmallScreen) {
                    setCount(countCards().init)
                }
            }

            window.addEventListener('resize', countCardsForResize)
            return () => window.removeEventListener('resize', countCardsForResize)
        }
    }, [pathname, movies])

    function clickMore() {
        setCount(count + countCards().step)
    }

    const renderList = () => {
        if (isLoading) {
            return <Preloader/>
        }

        if (pathname === '/movies' && !!fact.length) {
            return (
                <ul className='movies__list'>
                    {fact.map(data => {
                        return (
                            <MoviesCard
                                key={data.id}
                                savedMovies={savedMovies}
                                addMovie={addMovie}
                                data={data}
                            />
                        )
                    })}
                </ul>
            )
        }

        if (!!movies.length) {
            return (
                <ul className='movies__list'>
                    {movies.map(data => {
                        return (
                            <MoviesCard
                                key={data._id}
                                onDelete={onDelete}
                                data={data}
                            />
                        )
                    })}
                </ul>
            )
        }

        if (serverError) {
            return (
                <span className='movies__list-error'>"Произошла ошибка. Возможно проблема соединением и сервер не доступен. Попробуйте ещё раз."</span>
            )
        }

        if (!firstEntrance) {
            return (
                <span className='movies__list-error'>"Чтобы увидеть список фильмов выполните поиск."</span>
            )
        }

        if (pathname === "/movies") {
            return (
                <span className='movies__list-error'>"Ничего не найдено."</span>
            )
        }

        return <span className='movies__list-error'>"Нет сохранёных фильмов."</span>
    }

    return (
        <section className='movies page__movies' aria-label='Галерея'>
            {renderList()}

             {pathname === '/movies' && movies.length > 0 && (
                count < movies.length && (
                    <button
                        type='button'
                        className={`movies__more ${count >= movies.length ? 'movies__more_hidden' : ''}`}
                        onClick={clickMore}
                    >
                        Ещё
                    </button> 
            ) 
        )}
      </section>
      );
    }

export default MoviesCardList


/* {name === 'movies' ? (<LoadButton />) : (<LoadButton name={name} disabled={true} />)} */

/*<button
                    type='button'
                    className={`movies__more ${count >= movies.length && 'movies__more_hidden'}`}
                    onClick={clickMore}
                >
                    Ещё
                </button> */