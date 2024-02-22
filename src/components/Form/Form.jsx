import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form({ 
    name, 
    nameButton, 
    onSubmit, 
    children, 
    // isValid = true, 
}) {
    const disabled = false;

    return(
        <>
            <form className='auth__form'
                name={`auth-form-${name}`}
                noValidate
                onSubmit={onSubmit}
            >
                <fieldset className='auth__contact-info'>
                    {children}
                    {!disabled ? (
                        <button 
                            type='submit'
                            // disable='true'
                            // disabled={disabled ? 'true' : ''}
                            className={`${
                                name === 'signup' ? 'auth__button-safe' : 'auth__button-safe-login'
                            }`}
                        >
                            {nameButton}
                        </button>
                    ) : (
                        <button
                            type='submit'
                            // disable='true'
                            // disabled={disabled ? 'true' : ''}
                            className={`${
                                name === 'signup' ? 'auth__button-submit-disabled' : 'auth__button-submit-disabled-login'
                            }`}
                        >
                            {nameButton}
                        </button>
                    )}

                    {name === 'signup' && (
                        <Link to='/signin' className='auth__link-transition'>
                            Уже зарегистрированы?{' '}
                            <p className='auth__link-transition-text'>Войти</p>
                        </Link>
                    )}
                    {name === 'signin' && (
                        <Link to='/signup' className='auth__link-transition'>
                            Ещё не зарегистрированы?
                            <p className='auth__link-transition-text'>Регистрация</p>
                        </Link>
                    )}
                </fieldset>
            </form>
        </>
    );
}

export default Form
