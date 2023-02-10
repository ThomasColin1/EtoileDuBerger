import "./Cristal.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import cristal from "../media/ciel cristal.png"

function Cristal() {
    return (
        <div id="cristalMain">
        <Header/>
        <div id="cristalBody">
            <div id="cardElement">
                <img src={cristal}></img>
                <div>
                    <div>
                        <p className="cardTitle">Ciel de Cristal</p>
                        <p className="prix1">30€ - 30min</p>
                        <p className="prix2">40€ - 40min</p>
                        <p className="prix3">20€ - 20min</p>
                    </div>
                </div>
            </div>
            <div id="divFlex">
            <p id="cristalText1">•&nbsp;&nbsp;&nbsp;&nbsp;Technologie alliant la thérapie par les cristaux, celle de la lumière et des couleurs.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Purificateur subtil de l'Être dans sa globalité.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Véritable amplificateur d'énergie pour le corps et l'esprit.</p>
            <p id="cristalText2">•&nbsp;&nbsp;&nbsp;&nbsp;Apporte un meilleur ancrage
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une relaxation intense
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une meilleure connexion à soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une clarté d'esprit
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Aide à gérer le stress et la fatigue.</p>
            <p className="underlineText" id="cristalText3">Comment fonctionne le "ciel de cristal" et produit-il le résultat escompté ?</p>
            <p id="cristalText4">Le « ciel de cristal » combine la puissance de la « thérapie par les couleurs » et de la « thérapie par les cristaux ». Ce flux d'énergie produit une stimulation bénéfique à plusieurs niveaux physiques et énergétiques de l'être.
            <br/>La lumière colorée brille à travers les cristaux générant ainsi une puissante énergie thérapeutique. Comme les couleurs sont transmises à travers les cristaux sur chaque Chakra, ainsi, ils reçoivent un profond nettoyage et une harmonisation. Cela génère directement un impact positif sur notre état mental, émotionnel ou physique.
            <br/>En effet, lorsque les chakras sont déséquilibrés, tous les autres aspects de nous-mêmes sont également perturbés.
            <br/>Lorsque les énergies subtiles du corps humain sont harmonisées, le mécanisme d’auto-guérison naturel de notre organisme redevient capable de fonctionner comme il est conçu pour le faire. Le « ciel de cristal » nettoie et recharge le corps d'énergie et crée une profonde relaxation. Il procure également un effet préventif et peut éviter certaines pathologies ou mal-être. C'est un réalignement énergétique global qui s'opère sur le patient.
            </p>
            </div>
            <p className="underlineText" id="cristalText5">A quoi s'attendre après une séance de « ciel de cristal » ?</p>
            <p id="cristalText6">
            Le changement peut se produire à différents niveaux. Le « ciel de cristal » peut également aider à ouvrir ou amplifier sa connexion spirituelle. Beaucoup de gens ayant eu une séance de « ciel de cristal » ont signalé certains des éléments suivants :
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Disparition des tensions nerveuses et une relaxation profonde.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Se sentant plus en paix avec eux-mêmes, moins stressés et un sentiment accru de bien-être
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;général.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une compréhension spirituelle plus profonde d'eux-mêmes, de leurs conditions de vie, etc.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Obtention d’un aperçu sur leur chemin de vie future et d’un aperçu de la cause de leur(s)état(s)pathologique(s) ou de mal-être.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Agit sur les plans physiques, émotionnels, mentaux et spirituels de l’être.
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Apporte un meilleur ancrage
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une meilleure connexion à soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Une clarté d'esprit
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Aide à gérer le stress ...
            <br/>Chaque personne ayant reçu une séance de « ciel de cristal », rapporte un effet différent. Chaque expérience est unique, en fonction de son état, de ses besoins et du niveau de sensibilisation.
            <br/>Beaucoup de gens ayant vécu cette expérience avec les cristaux se sont sentis dans un état second après une séance. Il peut se produire parfois une reconnexion avec des vies antérieures, dans un sentiment de paix et d'harmonie. L'expérience est tout à fait individuelle.</p>
        </div>
        <div id="footerCristal">
        <Footer/>
        </div>
        </div>
    );
}

export default Cristal;