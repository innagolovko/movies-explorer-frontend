import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';
import account from '../../images/menu-account.svg';

function Navigation({name}) {

    const [isLogedIn, setIsLogedIn] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function openMenuHeader() {
        setIsOpenMenu(true);
    }

    function openMenu() {
        const menuItemButtonOpen = document.querySelector(
            '.navigation__b-open-menu',
            );
            menuItemButtonOpen.addEventListener('click', openMenuHeader);
    }

     function closeMenuHeader() {
        setIsOpenMenu(false);
    }

    function closeMenu() {
        const menuItemButtonClose = document.querySelector(
            '.navigation__b-close-menu',
            );
            menuItemButtonClose.addEventListener('click', closeMenuHeader);
    }

    return(
        <nav className='navigation'>
            {name === 'promo' && !isLogedIn ? (
                <>
                    <ul className='navigation__container navigation__container_promo'>
                        <li>
                            <Link
                            to='/signup'
                            className='navigation__button'
                            >
                                Регистрация
                            </Link>
                        </li>
                        <li>
                           <Link
                            to='/signin'
                            className='navigation__button navigation__button-login navigation__button-inauth'
                            >
                                Войти
                            </Link> 
                        </li>
                    </ul>
                </>
            ) : name === 'promo' && isLogedIn ? (
                <>
                    <div className='navigation__container navigation__container-auth'>
                        <ul className='navigation__grid'>
                            <li>
                                {' '}
                                <Link
                                to='/movies'
                                className='navigation__button navigation__button-movies'
                                >
                                    Фильмы
                                </Link>
                            </li>
                            <li>
                               {' '}
                                <Link
                                to='/saved-movies'
                                className='navigation__button'
                                >
                                    Сохранённые фильмы
                                </Link> 
                            </li>
                        </ul>
                        <div className='navigation__profile'>
                            <Link
                                to='/profile'
                                className='navigation__button'
                                >
                                    Аккаунт {' '}
                                <div className='navigation__profile-icon-circle'></div>
                                  {/*  <img className='navigation__profile-icon navigation__profile-icon_promo'
                                        alt='иконка профиля'
                                        src={iconAccount}
                                    ></img> */}
                            </Link>
                        </div>
                    </div>

                    <button className={`navigation__b-open-menu navigation__b-open-menu_promo ${
                        isOpenMenu && 'navigation__b-open-menu-inactive'
                    }`}
                        onClick={openMenu}
                        type='button'
                    >
                    </button> 

                    <div className={`navigation__menu ${
                        isOpenMenu && 'navigation__menu-active'
                    }`}
                    > 

                        {/* menu */}
                        <div className='navigation__menu-shadow'>
                            <div className='navigation__menu-content'>
                                <button
                                    className='navigation__b-close-menu'
                                    onClick={closeMenu}
                                >
                                </button>

                                <ul className='navigation__menubox'>
                                    <li className='navigation__menubox-line'>
                                        <Link
                                        to='/'
                                        className='navigation__menubox-text' 
                                        >
                                            Главная
                                        </Link>
                                    </li>
                                    <li className='navigation__menubox-line'>
                                        <Link
                                        to='/movies'
                                        className='navigation__menubox-text' 
                                        >
                                            Фильмы
                                        </Link>
                                    </li>
                                    <li className='navigation__menubox-line'>
                                        <Link
                                        to='/saved-movies'
                                        className='navigation__menubox-text' 
                                        >
                                            Сохранённые фильмы
                                        </Link>
                                    </li>
                                    <li className='navigation__menubox-line'>
                                        <Link
                                        to='/profile'
                                        className='navigation__button' 
                                        >
                                            Аккаунт {' '}
                                        <div className='navigation__profile-icon-circle'></div>
                                        {/* <img className='navigation__profile-icon navigation__profile-icon_promo'
                                            alt='иконка профиля'
                                            src={iconAccount}
                                        ></img> */}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='navigation__container navigation__container-auth'>
                        <ul className='navigation__grid'>
                            <li>
                                <Link
                                    to='/movies'
                                    className='navigation__button navigation__button-movies'
                                > 
                                    Фильмы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/saved-movies'
                                    className='navigation__button  navigation__button-movies'
                                > 
                                    Сохранённые фильмы
                                </Link>
                            </li>
                        </ul>

                       <div className='navigation__profile'>
                            <Link
                                to='/profile'
                                className='navigation__button navigation__button-profile'
                                >
                                    Аккаунт {' '}
                                    <div className='navigation__profile-icon-circle'></div>
                                    {/* <img className='navigation__profile-icon navigation__profile-icon_promo'
                                        alt='иконка профиля'
                                        src={iconAccount}
                                    ></img> */}
                            </Link>
                        </div> 
                    </div>

                   <button 
                        className={`navigation__b-open-menu ${
                            isOpenMenu && 'navigation__b-open-menu-inactive'
                        }`}
                        onClick={openMenu}
                        type='button'
                    >
                    </button>

                        <div 
                            className={`navigation__menu ${
                                isOpenMenu && 'navigation__menu-active'
                            }`}
                        >
                            <div className='navigation__menu-shadow'>
                                <div className='navigation__menu-content'>
                                    <button
                                        className='navigation__b-close-menu'
                                        onClick={closeMenu}
                                    >
                                    </button>

                                    <ul className='navigation__menubox'>
                                        <li className='navigation__menubox-line'>
                                            <Link
                                            to='/'
                                            className='navigation__menubox-text' 
                                            >
                                                Главная
                                            </Link>
                                        </li>
                                        <li className='navigation__menubox-line'>
                                            <Link
                                            to='/movies'
                                            className='navigation__menubox-text' 
                                            >
                                                Фильмы
                                            </Link>
                                        </li>
                                        <li className='navigation__menubox-line'>
                                            <Link
                                            to='/saved-movies'
                                            className='navigation__menubox-text' 
                                            >
                                                Сохранённые фильмы
                                            </Link>
                                        </li>
                                        <li className='navigation__menubox-line'>
                                            <Link
                                            to='/profile'
                                            className='navigation__button' 
                                            >
                                                Аккаунт {' '}
                                                <div className='navigation__menu-account'>
                                                    <img src={account} alt='account' />
                                                </div>
                                         
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                        </div> 
                </>
            )}
        </nav>
    )
}

export default Navigation
