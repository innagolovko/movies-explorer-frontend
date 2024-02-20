import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

    const navigate = useNavigate();

    return (
        <section className='notfound'>
            <h1 className='notfound__title'>404</h1>
            <p className='notfound__subtitle'>Страница не найдена</p>
            <button
                type='button'
                className='notfound__button'
                onClick={() => navigate(-1)}
            >
            </button>
        </section>
    )
}

export default NotFound
