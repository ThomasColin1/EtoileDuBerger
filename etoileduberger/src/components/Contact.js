import "./Contact.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import facebook from "../media/contact facebook.png"
import phone from "../media/contact phone.png"
import mail from "../media/contact mail.png"
import facebookicon from "../media/facebook.png"
import phoneicon from "../media/phone.png"
import mailicon from "../media/email.png"

function Contact() {
    return (
        <div id="accueilMain">
            <Header/>
            
            <div id="imgGrid">
                <div><img src={phone} className="contactBackground"/>
                    <p className="contactText1">Téléphone</p>
                    <img src={phoneicon} className="iconContact"/>
                    <a href="tel:0783140556" className="contactText2">07.83.14.05.56</a>
                </div>
                
                <div><img src={mail} className="contactBackground"/>
                    <p className="contactText1">Mail</p>
                    <img src={mailicon} className="iconContact"/>
                    <a href="mailto:letoileduberger72@gmail.com" className="contactText2">letoileduberger72@gmail.com</a>
                </div>
                <div><img src={facebook} className="contactBackground"/>
                    <p className="contactText1">Facebook</p>
                    <img src={facebookicon} className="iconContact"/>
                    <a href="https://www.facebook.com/ki.la.1806253" className="contactText2">Ciel de Cristal</a>
                </div>
            </div>
            
            <div id="footerAccueil">
            <Footer/>
            </div>
        </div>
    );
    }
    
    export default Contact;