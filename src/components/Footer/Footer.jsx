import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

    return (
        <footer className='footer'>
            <h1 className='footer__title'>
                Учебный проект Яндекс. Практикум х BeatFilm.
            </h1>
                <div className='footer__container'>
                    <p className='footer__copyrigth'>&copy; 2024</p>
                        <div className='footer__links'>
                            <Link to='https://practicum.yandex.ru/'
                                className='footer__link'
                                target='_blank'
                            >
                                Яндекс.Практикум
                            </Link>
                                <Link to='https://github.com/innagolovko'
                                    className='footer__link'
                                    target='_blank'
                                >
                                    Github
                                </Link>
                        </div>
                </div>
        </footer>
    );
}

export default Footer;
