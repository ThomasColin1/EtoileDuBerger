import "./Accueil.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import californien from "../media/massage californien.png"
import suedois from "../media/massage suedois.png"
import lahochi from "../media/lahochi.png"
import cristal from "../media/ciel cristal.png"
import {HashLink} from 'react-router-hash-link';


function Accueil() {
return (
    <div id="accueilMain">
        <Header/>
        <div id="accueilCards">
            <div>
                <HashLink to="/californien" className="link">
                <img src={californien}></img>
                <div>
                    <div>
                        <p className="cardTitle">Massage Californien</p>
                        <p className="prix1">60€ - 1h00</p>
                    </div>
                </div>
                </HashLink>
            </div>
            <div>
                
                <HashLink to="/suedois" className="link">
                <img src={suedois}></img>
                <div>
                    <div>
                        <p className="cardTitle">Massage Suédois</p>
                        <p className="prix1">60€ - 1h00</p>
                    </div>
                </div>
                </HashLink>
            </div>
            <div>
                
                <HashLink to="/cristal" className="link">
                <img src={cristal}></img>
                <div>
                    <div>
                        <p className="cardTitle">Ciel de Cristal</p>
                        <p className="prix1">20€ - 20min</p>
                        <p className="prix2">60€ - 1h00</p>
                    </div>
                </div>
                </HashLink>
            </div>
            <div>
                
                <HashLink to="/lahochi" className="link">
                <img src={lahochi}></img>
                <div>
                    <div>
                        <p className="cardTitle">LaHoChi</p>
                        <p className="prix1">50€ - 1h00</p>
                    </div>
                </div>
                </HashLink>
            </div>


        </div>
        <div id="footerAccueil">
        <Footer/>
        </div>
    </div>
);
}

export default Accueil;