import './Store.css';

const Store = () => {
    return (
        <div className='store'>
            <div className='store__content'>
                <h3>Store locator</h3>
                <p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
                <button>Find a nearby store</button>
            </div>
            <div className='store__carousel'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Store;