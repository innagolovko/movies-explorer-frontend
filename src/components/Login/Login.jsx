import './Login.css';
import Form from '../Form/Form.jsx';
import Auth from '../Auth/Auth.jsx';

function Login({name}) {

    return(
        <Auth name='signin'>
            <Form 
                name={name}
                title='Вход'
                nameButton='Войти'
            >
                <span className='auth__input-me'>Email</span>
                <input
                    type='email'
                    name='email'
                    id='email'
                    className='auth__input auth__input-auth'
                    placeholder='Email'
                    required=''
                    minLength='2'
                    maxLength='30'
                />

                <span className='auth__input-error auth__input-error-noactive'disabled>Что-то пошло не так...</span>
                <span className='auth__input-me'>Пароль</span>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className='auth__input auth__input-auth'
                    placeholder='Пароль'
                    required=''
                    minLength='2'
                    maxLength='30'
                />
                <span className='auth__input-error auth__input-error-noactive'disabled>Что-то пошло не так...</span>
            </Form>
        </Auth>
    );
}

export default Login
