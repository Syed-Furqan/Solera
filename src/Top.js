import './Top.css';

const Top = () => {
    return (
        <div className='top'>
            <div className='top__left'>
                <div className='top__left-content'>
                    <h3>Gift selection, simplified</h3>
                    <p>Bring joy to deserving recipients of all stripes with a carefully curated selection 
                    of formulations for the skin, body and home.</p>
                    <button>Browse all gifts</button>
                </div>
            </div>
            <div className='top__right'>
                <picture>
                    <source srcSet="https://www.aesop.com/u1nb1km7t5q7/7o0nLTcAyeOFlkW1MEyr3C/5639399205d6d4c7966f1096f20cf200/Aesop_Gift_Kits_2021_Web_Homepage_2_Primary_50-50_Tablet_1536x950px.jpg" media="(max-width: 991px)" />
                    <img src="https://www.aesop.com/u1nb1km7t5q7/4MCRgugtHgl1hD9P7o2U8A/03d54c59ae23068ed910119115557110/Aesop_Gift_Kits_2021_Web_Landing_Page_Secondary_50-50_Desktop_1440x1500px.jpg" alt="" />
                </picture>
                <img src="https://www.aesop.com/u1nb1km7t5q7/7FCpperJ9RxcwrxLV32w0K/2340610bf80421506883d758f777915e/Aesop_Gift_Kits_2021_Web_Homepage_2_Primary_Product_Overlay_Desktop_Tablet_800x640px.png" alt="" />
            </div>
        </div>
    );
}

export default Top;