import React from 'react';
import './NavTab.css';
// import { HashLink } from 'react-router-hash-link';

function NavTab() {

    return (
       <section className='navtab'>
            <div className='navtab__button'>
                <a className='navtab__button-links' href='/#aboutproject' >
                  Узнать больше
                </a>
            </div>
            <div className='navtab__container'>
               { /* <ul className='navtab__links'>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#aboutproject' className='navtab__link'>
                            О проекте 
                        </HashLink>
                    </li>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#techs' className='navtab__link'>
                           Технологии 
                        </HashLink>
                    </li>
                    <li className='navtab__block'>
                        <HashLink smooth to='/#about' className='navtab__link'>
                            Студент 
                        </HashLink>
                    </li>
                </ul> */}
            </div>
        </section>
    );
}

export default NavTab;
