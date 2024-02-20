import './AboutProject.css';

    function AboutProject() {

    return (
        <section className='aboutproject' id='aboutproject'>
            <h2 className='aboutproject__title'>О проекте</h2>
            <ul className='aboutproject__description'>
                <li className='aboutproject__list'>
                    <h3 className='aboutproject__list-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='aboutproject__list-text'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li>
                    <h3 className='aboutproject__list-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='aboutproject__list-text'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p> 
                </li>
            </ul>
            <ul className='aboutproject__interval'>
                <li className='aboutproject__interval-list'>
                    <h3 className='aboutproject__interval-list-back'>
                        1 неделя
                    </h3>
                    <p className='aboutproject__interval-list-text'>
                        Back-end
                    </p>
                </li>
                <li className='aboutproject__interval-list'>
                    <h3 className='aboutproject__interval-list-front'>
                        4 недели
                    </h3>
                    <p className='aboutproject__interval-list-text'>
                        Front-end
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject
