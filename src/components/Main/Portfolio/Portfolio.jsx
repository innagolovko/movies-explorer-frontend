import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {

    return(
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-item'>
                        <Link 
                            className='portfolio__link'
                            title='Project - How to learn'
                            to='https://github.com/mybenim/how-to-learn'
                            target='_blank'
                            // rel='noreferrer'
                        >
                            Статичный сайт
                            
                        </Link>
                    </li>
                    <li className='portfolio__list-item'>
                        <Link 
                            className='portfolio__link'
                            title='Project - Russian travel'
                            to='https://mybenim.github.io/russian-travel/'
                            target='_blank'
                            // rel='noreferrer'
                        >
                            Адаптивный сайт
                        </Link>
                    </li>
                    <li className='portfolio__list-item'>
                        <Link 
                            className='portfolio__link'
                            title='Project - Mesto'
                            to='https://mybenim.github.io/russian-travel/'
                            target='_blank'
                            // rel='noreferrer'
                        >
                            Одностраничное&nbsp;приложение
                        </Link>
                    </li>
                </ul>
            </div>              
        </section>
    );
}

export default Portfolio
