import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({ handleSearchForm, hasAnswers }) {

    const [query, setQuery] = useState('');
    const [shortFilmsDecision, setShortFilmsDecision] = useState(false);

    function handleQuery(evt) {
        setQuery(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleSearchForm(query, shortFilmsDecision);
        setQuery('');
    }

    function handleCheckboxChange(decision) {
        setShortFilmsDecision(decision);
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__query">
                <input className="search__input" type="text" placeholder="Фильм" onChange={handleQuery} value={query} placeholder={hasAnswers ? 'Фильм' : 'Ничего не найдено'} />
                <button className="search__submit" disabled={!query}>Поиск</button>
            </div>
            <FilterCheckbox onChange={handleCheckboxChange} />
        </form>
    );
}

export default SearchForm;