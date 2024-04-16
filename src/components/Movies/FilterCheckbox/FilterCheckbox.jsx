import './FilterCheckbox.css';

function FilterCheckbox({ isCheck, changeShort, firstEntrance }) {

    return (
        <div className='search__container-checkbox'>
            <label className={`search__checkbox-label ${firstEntrance && 'search__checkbox-label_disabled'}`}> 
                <input type='checkbox' className='search__checkbox' onChange={() => changeShort()} disabled={firstEntrance}/>
                <span className='search__checkbox-button'/> 
                
                <span className='search__checkbox-text'>Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox
