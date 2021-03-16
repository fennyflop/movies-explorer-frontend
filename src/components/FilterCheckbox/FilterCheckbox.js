import './FilterCheckbox.css';

function FilterCheckbox({ onChange }) {
    return (
        <div className="toggler">
            <input type="checkbox" className="toggler__checkbox" id="switch" onChange={(evt) => { onChange(evt.target.checked) }} /><label className="toggler__label" htmlFor="switch">Toggle</label>
            <p className="toggler__label-name">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;