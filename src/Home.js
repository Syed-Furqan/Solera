import Seasonal from './Seasonal';
import './Home.css';
import MiddleVideo from './Middle.js';
import MiddlePic from './MiddlePic';
import Nav from './Nav';
import Top from './Top';
import Thoughtful from './Thoughtful';
import Store from './Store';
import Footer from './Footer';

const Home = () => {
    const obj1 = {
        src: 'https://player.vimeo.com/external/638914554.hd.mp4?s=81b54b0804759c55f2fa55db7c39b7ea8cca0abc&profile_id=175',
        h3: 'For friendly faces',
        p: 'Selections of cherished skin care—some for the novice with empty bathroom cabinets, others for the well-stocked expert.',
        button: 'Browse Skin Care Gifts'
    }

    const obj2 = {
        src: 'https://player.vimeo.com/external/638938995.hd.mp4?s=11da203a3eb6cefd91f8fbf6af2dacc20d102060&profile_id=175',
        h3: 'Treasured Tokens',
        p: 'A considered assortment of our most sought-after formulations—from signature hand washes to potent facial hydrators, to transportive aromas for the home.',
        button: 'Browse favourite formulations'
    } 

    return (
        <div className="home">
            <Nav />
            <Top />
            <MiddleVideo obj={obj1}/>
            <MiddleVideo obj={obj2}/>
            <MiddlePic />
            <Seasonal />
            <Thoughtful />
            <Store />
            <div className='home__quote'>
                <h3>'It is always the simple that produces the marvellous.'</h3>
                <p>Amelia Barr</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;