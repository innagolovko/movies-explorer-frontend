import { useEffect } from 'react';
import './Form.css';
// import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext.js';
import ErrorContext from '../../context/ErrorContext.js';
import SendContext from '../../context/SendContext.js';

function Form({ 
    name,  
    onSubmit, 
    children, 
    isValid,
    setIsError,
    values,
    isEdit,
    setIsEdit,
    isSuccess,
    setSuccess
}) {
    
    // const { pathname } = useLocation();
    const currentUser = useContext(CurrentUserContext);
    const isError = useContext(ErrorContext);
    const isSend = useContext(SendContext);
    
   useEffect(() => {
    setIsError(false)
    }, [setIsError])

   /* useEffect(() => {
        if (pathname === '/profile') {
            setSuccess(false)
            setIsEdit(false)
        }
    }, [setSuccess, setIsEdit, pathname]) */

    const renderContent = () => {
        if (name === 'signup') {
                return (
                    <>
                        <span className={`login__error-request login__error-request_type_reg ${isError && 'login__error-request_active'}`}>{isError && 'При регистрации произошла ошибка.'}</span> 
                            <button
                                type='submit'
                                className={`login__button-request ${isValid && !isError ? '' : 'login__button-request_disabled'}`}
                                disabled={!isValid || isSend || isError}
                            >
                                {isSend ? 'Зарегистрироваться...' : 'Зарегистрироваться'}  
                            </button>
                    </>) 
                }

        if (name === 'signin') {
            return (
                <>
                    <span className={`login__error-request ${isError && 'login__error-request_active'}`}>
                        {isError && 'При входе произошла ошибка.'}</span>
                    <button 
                        type='submit'
                        className={`login__button-submit ${isValid && !isError ? '' : 'login__button-submit_disabled'}`}
                        disabled={!isValid || isSend || isError}
                    >
                        {isSend ? 'Войти...' : 'Войти'} 
                    </button>
                </> )
            }
    
        if (!isEdit && name === 'profile') {
            return (
                <>  
                    <button type='button' className={'profile__button-edit'}
                        onClick={() => {
                           setIsError(false);
                            setIsEdit(true);
                           setSuccess(false);
                        }}>
                        {'Редактировать'}
                    </button>
                </>
                );
            } else {
                return (
                    <>
                        <span className={`profile__error ${isError ? 'profile__error_type_error' : isSuccess && 'profile__error_type_success'}`}>
                            {isError ? 'Успешно!' : isSuccess && 'Успешно!'}
                        </span>
 
                        <button type='submit' 
                            className={`profile__button-safe ${(
                                values.username === currentUser.name && values.email === currentUser.email) 
                                || isValid ? '' : 'profile__button-safe_disabled'}`}
                            disabled={!isValid || isSend || isError}
                        >
                            {isSend ? 'Сохранить...' : 'Сохранить'}
                        </button> 
                    </>
                );
            }
        };
                        
    return (
            <form noValidate name={name} onSubmit={onSubmit}>     
                {children}
                {renderContent()} 
            </form>
        );
    }; 

export default Form;
