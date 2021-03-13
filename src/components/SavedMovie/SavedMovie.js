import './SavedMovie.css';
import like from '../../images/like.png';

function SavedMovie() {
    return (
        <div className="movie">
            <img className="movie__thumbnail" alt="thumbnail" src={'https://cdn.ome.lt/gOopbOnRA5Ip1ckAVZL2sB7M0bg=/570x0/smart/uploads/conteudo/fotos/la-casa-head.jpg'} />
            <div className="movie__info">
                <div className="movie__toolbar">
                    <h3 className="movie__title">33 слова о дизайне</h3>
                    <button className="movie__delete"></button>
                </div>
                <p className="movie__duration">1ч42м</p>
            </div>
        </div>
    );
}

export default SavedMovie;