import "./Footer.css"
import {HashLink} from 'react-router-hash-link';

function Footer() {
    return(
        <div id="FooterMain">
            <HashLink to="/contact" className="link"><p id="Contacter">Contactez-Moi</p></HashLink>
        </div>
    );
}

export default Footer;