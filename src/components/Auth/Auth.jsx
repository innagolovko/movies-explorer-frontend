import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Auth.css';

function Auth({ name, children }) {

    return(
        <main className='auth'>
            <div className='auth__container'
                onClick={(event) => event.stopPropagation()}
            >
                <Link to='/'>
                    <img 
                        src={Logo} 
                        className='auth__logo'
                        alt='иконка'
                    />
                </Link>
                <h1 className='auth__title'>
                    {' '}
                    {name === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!'}
                </h1>
                {children}
            </div>
        </main>
    );
}

export default Auth
