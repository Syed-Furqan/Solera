import './Gifts.css';

const Gifts = () => {
    return (
        <div className='gifts'>
            <div className='gift'>
                <img src="https://www.aesop.com/u1nb1km7t5q7/6vAirLISJu8AWw3KBVEGMJ/c4df5bf0ddafb75ed768d31a2d618cdc/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Candles_Room_Sprays_Mid_Desktop_2560x1440px.jpg" alt="" />
                <div className='gift__content'>
                    <p>Gifts for home</p>
                    <small>Revitalise indoor spaces with gifts designed to illuminate space and instil atmosphere. Each is formulated 
                    to set the mood, calm the mind and refresh the mundane.</small>
                </div>
            </div>
            <div className='gift'>
                <img src="https://www.aesop.com/u1nb1km7t5q7/6Yi5Wuy3pBEoR1fKo8Mzei/c256d16f840cb64846e591e2452572d1/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Lucent_Sublime_Mid_Desktop_2560x1440px.jpg" alt="" />
                <div className='gift__content'>
                    <p>Gifts for self-care</p>
                    <small>Find special gifts to honour the most complex relationship of all—that which we have with ourselves.
                    Give generously and without restraint.</small>
                </div>
            </div>
        </div>
    );
}

export default Gifts;