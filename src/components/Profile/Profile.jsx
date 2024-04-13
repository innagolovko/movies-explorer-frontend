import { Link } from 'react-router-dom';
import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import { EmailRegex } from '../../utils/constants';
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form.jsx';
import Input from '../Input/Input';

function Profile({ name, logOut, editUserData, setIsError, isSuccess, setSuccess }) {
    
    const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation();
    const currentUser = useContext(CurrentUserContext);
    const [isEdit, setIsEdit] = useState(false); 

    useEffect(() => {
        reset({ username: currentUser.name, email: currentUser.email })
    }, [reset, currentUser, isEdit])

    function onSubmit(event) {
        event.preventDefault()
        editUserData(values.username, values.email)
    }
    
    
    return(   
        <section className='profile page__profile'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <Form 
                name={name}
                isValid={isValid}
                onSubmit={onSubmit}
                setIsError={setIsError}
                values={values}
                isSuccess={isSuccess}
                setSuccess={setSuccess}
                setIsEdit={setIsEdit}
                // readOnly={!isEdit}
                isEdit={isEdit}
            >
            <Input
                selectname={name}
                name='username'
                type='text'
                title='Имя'
                minLength='3'
                value={values.username}
                isInputValid={isInputValid.username}
                error={errors.username}
                onChange={handleChange}
                // readOnly={!isEdit}
                isEdit={isEdit}
            /> 
            
            <Input
                selectname={name}
                name='email'
                type='email'
                title='E-mail'
                value={values.email}
                isInputValid={isInputValid.email}
                error={errors.email}
                onChange={handleChange}
                pattern={EmailRegex}
                // readOnly={!isEdit}
                isEdit={isEdit}
            />   
            </Form>

            <Link to='/' onClick={logOut} className='profile__link-exit'>
                Выйти из аккаунта
            </Link>
        </section>
    );
}

export default Profile;
