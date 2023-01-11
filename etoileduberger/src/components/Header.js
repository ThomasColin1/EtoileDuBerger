import "./Header.css"
import star from "../media/star.png"
import {HashLink} from 'react-router-hash-link';

function Header() {
    return(
        <div id="headerMain">
        <HashLink to="/" className="link"><p id="title">L'étoile du Berger</p></HashLink>
        <div id="line"></div>
        <div id="menu">
            <HashLink to="/suedois" className="link"><p id="Suédois">Massage suédois</p></HashLink>
            <HashLink to="/californien" className="link"><p id="Californien">Massage californien</p></HashLink>
            <HashLink to="/lahochi" className="link"><p id="Lahochi">LaHoChi</p></HashLink>
            <HashLink to="/cristal" className="link"><p id="Cristal">Ciel de cristal</p></HashLink>
            <HashLink to="/contact" className="link"><p id="Contact">Contact</p></HashLink>
        </div>
        <img src={star} id="starImg"></img>
        </div>
    );
}

export default Header;