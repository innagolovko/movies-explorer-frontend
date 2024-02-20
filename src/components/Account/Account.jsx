import React, { useState } from 'react';
import './Account.css';
import Logo from '../../images/logo.svg';
import '../Header/Header';
import { Link } from 'react-router-dom';
import menu from '../../images/icon-menu-white.svg';
// import Navigation from '../Navigation/Navigation.jsx';
// import iconAccount from '../../images/icon.svg';

function Account({ loggedIn }) {

    const [isClicked, setIsClicked] = useState(false);

    function handleOpen() {
        setIsClicked(true);
    }

    function handleClose() {
        setIsClicked(false);
    }

    return(
        <>
           {/* { !loggedIn ? (
            <section className='account' id='account'>
                <div className='account__nav'>
               
                    <Link to='/' className='account__logo'>
                        <img src={Logo} alt='логотип' />
                    </Link>
                
                    <ul className='account__container account__container_promo'>
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
                </div>
               
            </section>

        ) : ( )} */}

            <section className='account' id='account'>
                <div className='account__nav'>
                    <Link to='/' className='account__logo'>
                        <img src={Logo} alt='логотип' />
                    </Link>

                    <div className='account__container account__container-auth'>
                        <ul className='account__grid'>
                            <li>
                                {' '}
                                <Link
                                to='/movies'
                                className='account__link'
                                >
                                    Фильмы
                                </Link>
                            </li>
                            <li>
                               {' '}
                                <Link
                                to='/saved-movies'
                                className='account__link'
                                >
                                    Сохранённые фильмы
                                </Link> 
                            </li>
                        </ul>
                    </div>

                     <div className='account__profile'>
                            <Link
                                to='/profile'
                                className='account__button'
                                >
                                    Аккаунт {' '}
                                    <div className='navigation__profile-icon-circle'></div>
                            </Link>
                            
                        </div>
                        <button onClick={handleOpen} className='navigation__b-open-menu-black'>
                                <img src={menu} alt='menu' />
                            </button> 
                       {/* {isClicked ? <Navigation handleClose={handleClose} /> : ''} */}
                </div>
            </section>
    
        
         </>
    );
}

export default Account;
