import './ProjectItem.css';
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.png';

function ProjectItem({ name, link }) {
    return (
        <div className="project">
            <a className="project__name" href={link} target="_blank">{name}</a>
            <a href={link} target="_blank"><img className="project__arrow" alt="arrow" src={arrow} href={link} /></a>
        </div>
    );
}

export default ProjectItem;