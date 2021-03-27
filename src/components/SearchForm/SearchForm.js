import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../FormHooks/FormHooks';
import { useEffect, useState } from 'react';

function SearchForm({ handleSearchForm, hasAnswers, movieList, areSaved, hasErrors }) {

    const [query, setQuery] = useState('');
    const [errorShown, setErrorShown] = useState(false);
    const [shortFilmsDecision, setShortFilmsDecision] = useState(false);

    function handleQuery(evt) {
        setQuery(evt.target.value);
    }

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        if (!query) return setErrorShown(true);
        setErrorShown(false);
        handleSearchForm(query, shortFilmsDecision, areSaved);
    }

    function handleCheckboxChange(decision) {
        setShortFilmsDecision(decision);
    }

    return (
        <form className="search" onSubmit={handleSearchSubmit}>
            <div className="search__query">
                <input className="search__input" type="text" placeholder="Фильм" onChange={handleQuery} value={query} name="query" placeholder={!(!movieList.length && !hasErrors) ? 'Фильм' : 'Ничего не найдено'} />
                <button className="search__submit">Поиск</button>
            </div>
            <p className={`search__error ${errorShown && 'search__error-shown'}`}>Нужно ввести ключевое слово</p>
            <FilterCheckbox onChange={handleCheckboxChange} />
        </form>
    );
}

export default SearchForm;