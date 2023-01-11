import "./Suedois.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import suedois from "../media/massage suedois.png"

function Suedois() {
    return (
        <div id="suedoisMain">
        <Header/>
        <div id="suedoisBody">
            <div id="cardElement">
                <img src={suedois}></img>
                <div>
                    <div>
                        <p className="cardTitle">Massage suedois</p>
                        <p className="prix1">60€ - 1h00</p>
                    </div>
                </div>
            </div>
            <div id="divFlex">
            <p className="underlineText" id="suedoisText3">Les bénéfices : </p>
            <p id="suedoisText4">•&nbsp;&nbsp;&nbsp;&nbsp;Le premier effet positif de ce massage suédois est le relâchement qui autorisera votre organisme à se régénérer, à rééquilibrer ses systèmes nerveux et endocrinien.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Tensions, spasmes musculaires et crampes seront fortement atténués. La circulation sanguine et lymphatique seront stimulées, ce qui aura comme effet indirect d’activer le système immunitaire et l’élimination des toxines.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Les échanges cellulaires et l’oxygénation des tissus seront également favorisés.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;L’élimination des cellules mortes et l’absorption de nouveaux nutriments vont nourrir la peau, la rendant veloutée et élastique.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;L’aspect du bien-être procuré par les attentions du masseur envers son client n’est pas à négliger. Elles autoriseront une sensation de paix et de tranquillité..</p>
            </div>
            <p className="underlineText" id="suedoisText5">Contre-Indications : </p>
            <p id="suedoisText6">
            Ce massage ne présente pas particulièrement de contre-indications. Néanmoins, il est impératif de prendre en considération certaines situations sanitaires avant la pratique du massage suédois :
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Grossesse antérieure à 3 mois
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Pathologies cardio-vasculaires
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Fractures (pas de massage avant 40-60 jours)
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Maladies infectieuses
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Maladies de peau contagieuses - Contusions
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;États fébriles ou inflammatoires - Insuffisance rénale et cardiaque
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Hypertension
            <br/><br/>Afin d’éviter tout risque inutile, en cas de doute, demandez à votre médecin traitant .</p>
        </div>
        <div id="footerSuedois">
        <Footer/>
        </div>
        </div>
    );
}

export default Suedois;