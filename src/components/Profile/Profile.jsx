import { Link } from 'react-router-dom';
import './Profile.css';
import { useState } from 'react';

function Profile(userName) {

    const disabled = false;
    const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);

    function makeButtonVisible() {
        setIsVisibleSubmit(true);
    }

    function makeButtonInvisible() {
        setIsVisibleSubmit(false);
    }

    return(
        
        <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий</h1>
                <div className='profile__container'>
                    <div className='profile__container-info'>
                        <span className='profile__info-text'>Имя</span>
                            <input
                                className='profile__info-text'
                                type='text'
                                placeholder='Инна'
                                minLength='2'
                                maxLength='40'
                            />
                    </div>
                        <div className='profile__container-info'>
                            <span className='profile__info-text'>E-mail</span>
                                <input
                                    className='profile__info-text'
                                    type='text'
                                    placeholder='iaminnochka@gmail.com'
                                    minLength='2'
                                    maxLength='40'
                                />
                        </div>
                </div>

                {isVisibleSubmit ? (
                    <button type='submit' className={`${!disabled ? 'profile__button-safe' : 'profile__button-safe_disabled'}`} onClick={makeButtonInvisible}>
                        Сохранить
                    </button>
                ) : (
                    <>
                    <button type='submit' className='profile__button-edit' onClick={makeButtonVisible}>
                        Редактировать
                    </button> 
                        <Link to='/signin' className='profile__link-exit'>
                            Выйти из аккаунта
                        </Link>
                    </>
                )}
        </section>
    );
}

export default Profile
