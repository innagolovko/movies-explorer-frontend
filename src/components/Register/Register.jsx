import './Register.css';
import Form from '../Form/Form.jsx';
import Auth from '../Auth/Auth.jsx';

function Register({name}) {

    return(
        <Auth name='signup'>
            <Form 
                name={name}
                title='Регистрация'
                nameButton='Зарегистрироваться'
            >
                <span className='auth__input-me'>Имя</span>
                <input
                    type='text'
                    name={name}
                    id='nameUser'
                    className='auth__input'
                    placeholder='Имя'
                    required=''
                    minLength='2'
                    maxLength='30'
                />

                <span className='auth__input-error auth__input-error-noactive' disabled>Что-то пошло не так...</span>
                <span className='auth__input-me'>Email</span>
                <input
                    type='text'
                    name='email'
                    id='email'
                    className='auth__input'
                    placeholder='Email'
                    required=''
                    minLength='2'
                    maxLength='30'
                />

                <span className='auth__input-error auth__input-error-noactive' disabled>Что-то пошло не так...</span>
                <span className='auth__input-me'>Пароль</span>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className='auth__input'
                    placeholder='Пароль'
                    required=''
                    minLength={2}
                    maxLength={30}
                />
                <span className='auth__input-error auth__input-error-noactive' disabled>Что-то пошло не так...</span>
            </Form>
        </Auth>
    );
}

export default Register
