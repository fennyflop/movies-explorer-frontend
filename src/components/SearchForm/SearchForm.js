import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search">
            <div className="search__query">
                <input className="search__input" type="text" placeholder="Фильм" />
                <button className="search__submit">Поиск</button>
            </div>
            <div className="search__toggle">
                <input type="checkbox" className="search__checkbox" id="switch" /><label className="search__label" htmlFor="switch">Toggle</label>
                <p className="search__label-name">Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;