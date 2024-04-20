import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.svg';
import AccountImg from '../../images/account.svg';
import AccountGreenImg from '../../images/account-green.svg';
import './Header.css';

function Header({ name, loggedIn }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    function clickLink() {
        setIsOpenMenu(false)
    } 

    useEffect(() => {
        function closeMenu() {
            if (document.documentElement.clientWidth > '767') {
                setIsOpenMenu(false)
                window.removeEventListener('resize', closeMenu)
            }
        }
        if (isOpenMenu) {
            window.addEventListener('resize', closeMenu)
            return () => window.removeEventListener('resize', closeMenu)
        }
    }, [isOpenMenu])

    return (
        <header className={`page__header ${name === 'promo' ? 'page__header_color_dark' : 'page__header_color_white'}`}>
            {loggedIn ? (
                <div className='header__container'> 
                    <nav className='page__header header__nav'> 
                        <Link to='/'>
                            <img className='header__logo' alt='логотип проекта' src={Logo}></img>
                        </Link>
                        <ul className='header__container header__container_type_page'>
                            <li>
                                <Link to='/movies' className={`header__link_type_page ${name === 'promo' ? 'header__link_color_white' : ''}`}>
                                    Фильмы
                                </Link>
                            </li>
                            <li>
                                <Link to='/saved-movies' className={`header__link_type_page ${name === 'promo' ? 'header__link_color_white' : ''}`}>
                                    Сохранённые фильмы
                                </Link>
                            </li>
                        </ul>

                        <Link to='/profile'>
                            <img className='header__account-logo' src={name === 'promo' ? AccountGreenImg : AccountImg} alt='лого профиля'></img>
                        </Link>

                       <button
                            className={`header__b-open-menu ${name === 'promo' ? 'header__b-open-menu_variant_white' : 'header__b-open-menu_variant_black'}`}
                            onClick={handleOpenMenu}
                            type='button'>
                        </button> 
                    </nav>

                    { /* menu */}

                    <div className={`header__menu ${isOpenMenu && 'header__menu_active'}`}>

                        <div className='header__menu-shadow'>
                            <div className='header__menu-content'>
                                <button
                            
                                    className='header__b-close-menu'
                                    onClick={handleOpenMenu}>
                                </button>

                                <ul className='header__menubox'>
                                    <li className='header__menubox-line'>
                                        <Link to='/' 
                                        className='header__menubox-text'
                                        onClick={clickLink}>
                                            Главная
                                        </Link>
                                    </li>
                                    <li className='header__menubox-line'>
                                        <Link to='/movies' 
                                        className='header__menubox-text'
                                        onClick={clickLink}>
                                            Фильмы
                                        </Link>
                                    </li>

                            
                                    <li className='header__menubox-line'>
                                        <Link to='/saved-movies' className='header__menubox-text'
                                        onClick={clickLink}>
                                            Сохранённые фильмы
                                        </Link>
                                    </li>
                                    <li className='header__menubox-line'>
                                        <Link to='/profile' className='header__menubox-text'
                                        onClick={clickLink}>
                                            <div className='header__link_type_account'>
                                                 Аккаунт
                                                <div className='header__profile-icon-circle'></div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='header page__header page__header_color_dark'>

                    <nav className='page__header header__nav'>
                        <Link to='/'>
                            <img className='header__logo' alt='лого профиля' src={Logo}></img>
                        </Link>

                        <ul className='header__container'>
                            <li>
                                <Link to='/signup' className='header__button-reg'>
                                    Регистрация
                                </Link>
                            </li>
                            <li>
                                <Link to='/signin' className='header__button-login'>
                                    Войти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;

