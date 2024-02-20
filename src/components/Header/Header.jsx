import React from 'react';
import Logo from '../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';

function Header({name}) {
    
    return (
      <header className={`${name === 'promo' ? 'header' : 'header__movies'}`}>
            <Link to='/'>
                <img
                    src={Logo}
                    alt='логотип'
                    className='header__logo'
                />
            </Link>
            <Navigation name={name}>
                <img
                    src={Logo}
                    alt='логотип'
                    className='header__logo'
                />
            </Navigation>
        </header>
    );
}

export default Header
