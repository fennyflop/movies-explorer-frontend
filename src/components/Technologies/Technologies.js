import './Technologies.css';

function Technologies() {
    return (
        <section className="technology">
            <h3 className="technology__name">Технологии</h3>
            <h1 className="technology__title">7 технологий</h1>
            <p className="technology__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="technology__skills">
                <p className="technology__skill">HTML</p>
                <p className="technology__skill">CSS</p>
                <p className="technology__skill">JS</p>
                <p className="technology__skill">React</p>
                <p className="technology__skill">Git</p>
                <p className="technology__skill">Express.js</p>
                <p className="technology__skill">mongoDB</p>
            </div>
        </section>
    );
}

export default Technologies;