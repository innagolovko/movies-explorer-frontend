import React from 'react';
import './AboutMe.css';
import { Link } from "react-router-dom";
import aboutMePhoto from '../../../images/mePhoto.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>Студент</h2>
                    <div className='about-me__info'>
                        <div className='about-me__info-text'>
                            <h3 className='about-me__name-title'>Инна</h3>
                            <p className='about-me__name-subtitle'>дизайнер, препресс-инженер, веб-разработчик</p>
                            <p className='about-me__info-text'>
                                Я из Краснодарского края. Работаю дизайнером полиграфической продукции, верстаю статьи, 
                                подготавливаю в печать. 
                                Решила пройти курс обучения 'Веб-разработчик' в 'ЯндексПрактикум'. 
                                Выбрала для себя это направление, потому что есть возможность работать удалённо.
                                Планирую и дальше развиваться в этой области. 
                            </p>
                                <Link to='https://github.com/innagolovko'
                                    className='about-me__link'
                                    target='_blank'
                                >
                                    GitHub
                                </Link>
                        </div>
                            <img src={aboutMePhoto} alt='Фото' className='about-me__photo'/> 
                    </div>
                </div>
        </section>
    );
}

export default AboutMe
