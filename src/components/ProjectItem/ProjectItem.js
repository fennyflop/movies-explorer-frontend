import './ProjectItem.css';
import arrow from '../../images/arrow.png';

function ProjectItem({ name, link }) {
    return (
        <div className="project">
            <a className="project__name" href={link} target="_blank" rel="noreferrer">{name}</a>
            <a href={link} target="_blank" rel="noreferrer"><img className="project__arrow" alt="arrow" src={arrow} href={link} /></a>
        </div>
    );
}

export default ProjectItem;