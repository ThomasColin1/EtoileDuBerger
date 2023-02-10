import "./Lahochi.css";
import Footer from "./Footer.js"
import Header from "./Header.js"
import lahochi from "../media/lahochi.png"

function Lahochi() {
    return (
        <div id="lahochiMain">
        <Header/>
        <div id="lahochiBody">
            <div id="cardElement">
                <img src={lahochi}></img>
                <div>
                    <div>
                        <p className="cardTitle">LaHoChi</p>
                        <p className="prix1">50€ - 1h00</p>
                    </div>
                </div>
            </div>
            <div id="divFlex">
            <p id="lahochiText3">•&nbsp;&nbsp;&nbsp;&nbsp;Réduit la douleur
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Accélère la guérison et la cicatrisation des plaies
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Renforce le système immunitaire
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Purifie, fortifie les organes en éliminant les toxines
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Optimise les bénéfices et réduit les effets secondaires d'un traitement allopathique
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Apporte un supplément d'énergie
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Favorise une récupération rapide après une maladie, une intervention chirurgicale, une blessure.</p>
            <p id="lahochiText4">•&nbsp;&nbsp;&nbsp;&nbsp;Régularise les émotions
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Offre un moment de recentrage sur soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Diminue le stress
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Diminue les insomnies
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Augmente la confiance en soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Augmente la capacité de concentration
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Lève les blocages, les angoisses, les peurs,...
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Aide à surmonter les dépendances
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;Aide lors au travail de deuil</p>
            </div>
            <p className="underlineText" id="lahochiText5">Il est important de noter que le LaHoChi travaille au «nettoyage» des nemoires cellulaires. </p>
            <p id="lahochiText6">

Nous avons ancré au plus profond de nous, un nombre incalculable «d'informations» enregistrées tout au long de notre vie, et ce depuis notre conception. Ces «informations», dont nous n'avons pas conscience, proviendraient aussi de nos vies anterieures et de tout ce que nous ont légué nos ancêtres. Lorsque ces mémoires sont discordantes, elles engendrent des émotions, des comportements que nous ne comprenons pas et qui nous font souffrir.
            </p>
        </div>
        <div id="footerLahochi">
        <Footer/>
        </div>
        </div>
    );
}

export default Lahochi;