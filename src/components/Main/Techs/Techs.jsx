import React from 'react';
import './Techs.css';

function Techs() {
     
    return (
      <section className='techs' id='techs'>
        <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__section-title'>7 технологий</h3>
                <p className='techs__subtitle'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
            <ul className='techs__blocks'>
                <li className='techs__block-item'>HTML</li>
                <li className='techs__block-item'>CSS</li>
                <li className='techs__block-item'>JS</li>
                <li className='techs__block-item'>React</li>
                <li className='techs__block-item'>Git</li>
                <li className='techs__block-item'>Express.js</li>
                <li className='techs__block-item'>mongoDB</li>
            </ul>
      </section>  
    );
}

export default Techs;
