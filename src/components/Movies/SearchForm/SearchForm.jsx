import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import './SearchForm.css';

function SearchForm() {

    return(
        <section className='search'>
            <form className='search__form'>
                <div className='search__form-input-container'>
                    <input
                        type='text'
                        className='search__form-input'
                        placeholder='Фильм'
                        name='searchInput'
                        required
                    />
                    <button className='search__form-button-submit' type='submit'>
                        Найти
                    </button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm
