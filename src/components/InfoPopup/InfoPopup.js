import { useEffect, useState } from 'react';
import './InfoPopup.css';

function InfoPopup({ isOpen, message, closePopup }) {

    let [progressWidth, setProgressWidth] = useState(1);

    useEffect(() => {
        const progressBarIncrease = setInterval(() => {
            setProgressWidth(progressWidth += 3);
            if (progressWidth >= 115) {
                clearInterval(progressBarIncrease);
                setProgressWidth(0);
                closePopup();
            }
        }, 100);
    }, [isOpen])

    return (
        <section className={`popup ${isOpen && "popup__opened"}`}>
            <div className="popup__container">
                <div className="popup__time"><div className="popup__progress" style={{
                    width: `${progressWidth}%`
                }}></div></div>
                <p className="popup__message">{message}</p>
                <button className="popup__close" onClick={closePopup}>Закрыть</button>
            </div>
        </section >
    );
}

export default InfoPopup;