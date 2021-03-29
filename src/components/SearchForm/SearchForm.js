import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../FormHooks/useForm';
import { useState } from 'react';

function SearchForm({ handleSearchForm, hasAnswers, movieList, areSaved, hasErrors }) {

    const [shortFilmsDecision, setShortFilmsDecision] = useState(false);
    const { values, handleChange, customHandleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt) {
        if (evt) evt.preventDefault();
        handleQuery(shortFilmsDecision);
    }

    function handleQuery(decision) {
        if (!isValid) return;
        handleSearchForm(values.query, decision, areSaved);
    }

    function handleCheckboxChange(decision) {
        setShortFilmsDecision(decision);
        handleQuery(decision);
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__query">
                <input className="search__input" type="text" autoComplete="off" placeholder="Фильм" onChange={handleChange} value={values.query} name="query" placeholder={!(!movieList.length && !hasErrors) ? 'Фильм' : 'Ничего не найдено'} required />
                <button className="search__submit" disabled={!isValid}>Поиск</button>
            </div>
            <p className={`search__error ${errors.query && 'search__error-shown'}`}>{errors.query}</p>
            <FilterCheckbox onChange={handleCheckboxChange} />
        </form>
    );
}

export default SearchForm;