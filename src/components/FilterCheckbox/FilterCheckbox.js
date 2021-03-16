import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="toggler">
            <input type="checkbox" className="toggler__checkbox" id="switch" /><label className="toggler__label" htmlFor="switch">Toggle</label>
            <p className="toggler__label-name">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;