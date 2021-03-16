import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className="search">
            <div className="search__query">
                <input className="search__input" type="text" placeholder="Фильм" />
                <button className="search__submit">Поиск</button>
            </div>
            <FilterCheckbox />
        </form>
    );
}

export default SearchForm;