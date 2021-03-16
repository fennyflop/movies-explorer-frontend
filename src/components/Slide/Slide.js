import './Slide.css';

function Slide(props) {
    return (
        <section className={`slide ${props.name}`} id={props.id}>
            <h3 className="slide__title">{props.title}</h3>
            { props.children}
        </section >
    );
};

export default Slide;