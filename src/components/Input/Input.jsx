import { useContext } from 'react';
import SendContext from '../../context/SendContext.js';
import './Input.css';

function Input({ selectname, name, type, title, minLength, value, isInputValid, error, onChange, isEdit, pattern, placeholder }) {
    const isSend = useContext(SendContext);
    
    return (
        <>
            {selectname !== 'profile' ?
                <label className='login__label'>
                    <span className='login__subtitle'>{title}</span>
                    <input
                        className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
                        required
                        name={name}
                        type={type}
                        minLength={minLength || ''}
                        value={value || ''}
                        onChange={onChange}
                        autoComplete='on'
                        disabled={isSend}
                        pattern={pattern}
                        placeholder={placeholder}
                    />
                    <span className='login__error'>{error}</span>
                </label>
                :
                <>
                    <label className='profile__label'>
                    <span className='profile__subtitle'>{title}</span>
                    <input
                        className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
                        required
                        id={name}
                        name={name}
                        type={type}
                        minLength={minLength || ''}
                        value={value || ''}
                        onChange={onChange}
                        disabled={isSend}
                        pattern={pattern}
                        placeholder={placeholder}
                        readOnly={!isEdit}
                        // isEdit={isEdit}
                    />
                </label>
                </>
            }
        </>
    );
};

export default Input;
