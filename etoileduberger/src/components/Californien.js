import "./Californien.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import californien from "../media/massage californien.png"

function Californien() {
    return (
        <div id="californienMain">
        <Header/>
        <div id="californienBody">
            <div id="cardElement">
                <img src={californien}></img>
                <div>
                    <div>
                        <p className="cardTitle">Massage Californien</p>
                        <p className="prix1">60€ - 1h00</p>
                    </div>
                </div>
            </div>
            <div id="divFlex">
            <p className="underlineText" id="californienText1">Le massage Californien est utile aux personnes qui présentent les caractéristiques suivantes :</p>
            <p id="californienText2">•&nbsp;&nbsp;&nbsp;&nbsp;Problème de concentration
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Tension nerveuse
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Anxiété chronique
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Choc émotionnel
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Grand changement du corps (adolescence, amaigrissement important, amputation, ect) 
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Parcours psychothérapeutique</p>
            <p className="underlineText" id="californienText3">Les bénéfices : </p>
            <p id="californienText4">Les bénéfices sont nombreux et variés. Le massage Californien est un support au bien-être physique et psychologique et, en ce sens, il contribue à améliorer :
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;L’irrigation des tissus grâce aux manœuvres de drainage de la circulation veineuse et lymphatique.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Un retour à l’équilibre du système nerveux dû aux stimulations des nombreuses terminaisons nerveuses durant la pratique des manœuvres.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Un effet psychologique qui amène à la croissance du sujet, à l’amélioration de la structuration de la personnalité, à une meilleure perception de son schéma corporel et à une augmentation de l’estime de soi et de responsabilisation.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une connexion interne profonde, une intériorisation, grâce à l’écoute des messages (émotions) que le corps, à travers ce massage, peut donner.</p>
            </div>
            <p className="underlineText" id="californienText5">Contre-Indications : </p>
            <p id="californienText6">•&nbsp;&nbsp;&nbsp;&nbsp;Grossesse antérieure à 3 mois
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Fièvre
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Pathologie lourde ( cancer , problème cardiaque , rénal )</p>
        </div>
        <div id="footerCalifornien">
        <Footer/>
        </div>
        </div>
    );
}

export default Californien;