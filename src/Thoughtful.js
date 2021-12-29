import Carousel from './Carousel';
import './Thoughtful.css';

const Thoughtful = () => {

    const items = [
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png',
            p: 'Fabulous Face Cleanser',
            small: 'For skin requiring gentle cleansing'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png',
            p: 'Parsley Seed Facial Cleanser',
            small: 'Ideal for city dwellers'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png',
            p: 'Geranium Leaf Body Cleanser',
            small: 'A gentle, invigorating gel cleanser'
        },
        {
            img: 'https://www.aesop.com/u1nb1km7t5q7/3Anppvln8ifrtIrGGmYnnN/f3a9d64dd310ad72608cf566ff28b2b2/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png',
            p: 'Resurrection Aromatic Hand Wash',
            small: 'Gentle cleansing for hard working hands'
        }
    ]

    return (
        <div className='thoughtful'>
            <h3>Thoughtful Offerings</h3>
            <Carousel items={items}/>
        </div>
    );
}

export default Thoughtful;