import './Techs.css';
import Slide from '../Slide/Slide';

function Technologies() {
    return (
        <Slide name="techs" title="Технологии">
            <h1 className="techs__title">7 технологий</h1>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__skills">
                <p className="techs__skill">HTML</p>
                <p className="techs__skill">CSS</p>
                <p className="techs__skill">JS</p>
                <p className="techs__skill">React</p>
                <p className="techs__skill">Git</p>
                <p className="techs__skill">Express.js</p>
                <p className="techs__skill">mongoDB</p>
            </div>
        </Slide>
    );
}

export default Technologies;