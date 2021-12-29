import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer'>
                <div className='footer__email'>
                    <input type="email" name="" id="" placeholder='Email address'/>
                    <p>Subscribe to receive communications from Aesop about our products and services. 
                    By subscribing, you confirm you have read and accept our privacy policy.</p>
                </div>
                <div className='footer__info'>
                    <p className='footer__info-header'>Orders and support</p>
                    <p>Contact us</p>
                    <p>FAQs</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>Order history</p>
                    <p>Terms and conditions</p>
                </div>
                <div className='footer__info'>
                    <p className='footer__info-header'>Services</p>
                    <p>Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial appointments</p>
                </div>
                <div className='footer__info'>
                    <p className='footer__info-header'>Location preferences</p>
                    <p>Shipping: Hong Kong</p>
                    <p>Language: English</p>
                </div>
            </div>
            <p>© Aesop</p>
        </div>
    );
}

export default Footer;