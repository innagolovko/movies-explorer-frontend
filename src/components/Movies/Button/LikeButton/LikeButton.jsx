import './LikeButton.css';

function LikeButton() {

    const disable = false;

    return(
        <button 
            className={`${disable ? 'movies-card__button-like' : 'movies-card__button-like_active'}`}
            type='button'
        >
        </button>
    )
}

export default LikeButton
