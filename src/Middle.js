import './Middle.css';

const MiddleVideo = ({obj}) => {
    return (
        <div className='middle'>
            <div className='middle__left'>
                <video autoPlay loop muted src={obj.src}>
                </video>
            </div>
            <div className='middle__right'>
                <div className='middle__right-content'>
                    <h3>{obj.h3}</h3>
                    <p>{obj.p}</p>
                    <button>{obj.button}</button>
                </div>
            </div>
        </div>
    );
}

export default MiddleVideo;