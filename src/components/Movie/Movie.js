import './Movie.css';
import like from '../../images/like.png';

function Movie({ savedMovie }) {
    return (
        <div className="movie">
            <img className="movie__thumbnail" alt="thumbnail" src={'https://cdn.ome.lt/gOopbOnRA5Ip1ckAVZL2sB7M0bg=/570x0/smart/uploads/conteudo/fotos/la-casa-head.jpg'} />
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">33 слова о дизайне</h3>
                    <button className={savedMovie ? 'movie__delete' : `movie__save ${Math.random() * 100 > 50 ? 'movie__saved' : ''}`}></button>
                </div>
                <p className="movie__duration">1ч42м</p>
            </div>
        </div>
    );
}

export default Movie;