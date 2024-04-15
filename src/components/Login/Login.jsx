// import Form from '../Form/Form.jsx';
import Auth from '../Auth/Auth.jsx';
import useFormValidation from '../../utils/useFormValidation.js';
import Input from '../Input/Input.jsx';
import { EmailRegex } from '../../utils/constants.js';
// import Register from '../Register/Register.jsx';

function Login({ name, onLogin, setIsError }) {
  const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();

   function onSubmit(event) {
        event.preventDefault()
        onLogin(values.email, values.password)
    }

    return(
        <Auth name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
            
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
              
           
            {/* <Input>
             {children}
            </Input> 
             <Form 
                name={name}
                isValid={isValid}
                onSubmit={onSubmit}
                setIsError={setIsError}
            > */}
            {/* {children} 
             <span className='auth__subtitle'>Email</span>
             
               { /* <span className='auth__input-error auth__input-error-noactive'disabled>Что-то пошло не так...</span> */}
                
         { /*  </Form>  */}
        </Auth>
    );
}

export default Login;
