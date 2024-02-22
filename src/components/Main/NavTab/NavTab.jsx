import React from 'react';
import './NavTab.css';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

function NavTab() {

    return (
       <section className='navtab'>
            <button className='navtab__button'>
                <HashLink smooth to='/#aboutproject' className='navtab__button-links'>
                  Узнать больше
                </HashLink>
            </button>
            <div className='navtab__container'>
                <ul className='navtab__links'>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#aboutproject' className='navtab__link'>
                           {/* О проекте */}
                        </HashLink>
                    </li>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#techs' className='navtab__link'>
                          { /* Технологии */}
                        </HashLink>
                    </li>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#about' className='navtab__link'>
                           { /* Студент */}
                        </HashLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default NavTab
