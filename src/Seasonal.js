import Carousel from './Carousel';
import Gifts from './Gifts';
import './Seasonal.css';

const Seasonal = () => {
    const items = [
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/2cACZYBRezEJSSkOnyHsNr/26ae5054fc9b0c24e9d230403e029b3b/Aesop_Kits_Gift_Kits_2021-22_The_Listener_Web_Large_1584x962px.png',
            p: 'The Listener',
            small: 'Cleanser, balm, scrub'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/1M1ajBgz6IPtgvT6djQNWj/740332d61987548a3804ec43574bcf62/Aesop_Kits_Gift_Kits_2021-22_The_Forager_Web_Large_1584x962px.png',
            p: 'The Forager',
            small: 'Two invigorating body care staples'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/1lHhiEuUu6rCEFCCS4iuR6/6c2736de4daba4326e46957f1c062066/Aesop_Kits_Gift_Kits_2021-22_The_Advocate_Web_Large_1584x962px.png',
            p: 'The Advocate',
            small: 'Four hand and body care staples'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/2KeBWwSkfytrOdyQANwZ4U/1ff0028aa530d8e94aabf9e8f8e51d96/Aesop_Kits_Gift_Kits_2021-22_The_Protector_Web_Large_1584x962px.png',
            p: 'The Protector',
            small: 'For aromatic balance at home'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/21BZNMb2qajrxO3ymQ5Pmn/5db32b36ae37c16c9bda4aaad1136aa8/Aesop_Kits_Gift_Kits_2021-22_The_Mentor_Web_Large_1584x962px.png',
            p: 'The Mentor',
            small: 'Cleanser, toner, hydrating serum'
        }
    ]

    return (
        <div className='seasonal'>
            <div className='seasonal__content'>
                <h3>Seasonal Gift Kits</h3>
                <p>Comprising formulations for the skin, body and home, our Gift Kit collection is designed 
                to recognise everyday acts of kindness, and reverberate beyond the first exchange. </p>
            </div>
            <Carousel items={items}/>
            <Gifts />
        </div>
    );
}

export default Seasonal;