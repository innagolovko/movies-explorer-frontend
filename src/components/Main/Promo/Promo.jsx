import promoLogo from '../../../images/promo-logo.svg';
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div>
                <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
             <img src={promoLogo} alt='логотип проекта' className='promo__logo'/>
        </section>
    );
}

export default Promo
