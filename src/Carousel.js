import './Carousel.css';

const Carousel = ({items}) => {
    
    return (
    <div className="container">
        <div className="row">
            <div className="MultiCarousel" data-items="1,2,3,3" data-slide="1" id="MultiCarousel"  data-interval="1000">
                <div className="MultiCarousel-inner">
                    {items.map(item => (
                        <div className='item' key={item.p}> 
                            <div className="pad15">
                                <img src={item.img} alt="" />
                                <p>{item.p}</p>
                                <small>{item.small}</small>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary leftLst">
                    <i className='fas fa-chevron-left'></i>
                </button>
                <button className="btn btn-primary rightLst">
                    <i className='fas fa-chevron-right'></i>
                </button>
            </div>
        </div>
    </div>
    );
}

export default Carousel;