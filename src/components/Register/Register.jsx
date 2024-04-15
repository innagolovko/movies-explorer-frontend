import Auth from '../Auth/Auth.jsx';
import useFormValidation from '../../utils/useFormValidation.js';
import { EmailRegex } from '../../utils/constants.js';
import Input from '../Input/Input.jsx';

function Register({ name, onRegister, setIsError }) {
    const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();

    function onSubmit(event) {
        event.preventDefault()
        onRegister(values.username, values.email, values.password)
    }

    return(       
        <Auth name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
            <Input
                type='text'
                name='username'
                title='Имя'
                required=''
                minLength='2'
                maxLength='30'
                value={values.username}
                isInputValid={isInputValid.username}
                error={errors.username}
                onChange={(event) => {
                    handleChange(event)
                    setIsError(false)   // сбрасываем ошибку
                }}
                placeholder='Введите ваше имя'
            />
            <Input
                type='email'
                name='email'
                title='E-mail'
                value={values.email}
                isInputValid={isInputValid.email}
                error={errors.email}
                onChange={(event) => {
                    handleChange(event)
                    setIsError(false)
                }}
                placeholder='Введите вашу электронную почту'
                pattern={EmailRegex}
            />
            <Input
                type='password'
                name='password'
                title='Пароль'
                minLength='2'
                maxLength='30'
                value={values.password}
                isInputValid={isInputValid.password}
                error={errors.password}
                onChange={(event) => {
                    handleChange(event)
                    setIsError(false)
                }}
                placeholder='Введите ваш пароль'
            />
        </Auth>
    );
}

export default Register;
