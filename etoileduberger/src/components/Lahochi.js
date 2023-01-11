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
            <p id="lahochiText3">•&nbsp;&nbsp;&nbsp;&nbsp;réduit la douleur
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;accélère la guérison et la cicatrisation des plaies
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;renforce le système immunitaire
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;purifie, fortifie les organes en éliminant les toxines
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;optimise les bénéfices et réduit les effets secondaires d'un traitement allopathique
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;apporte un supplément d'énergie
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;favorise une récupération rapide après une maladie, une intervention chirurgicale, une blessure.</p>
            <p id="lahochiText4">•&nbsp;&nbsp;&nbsp;&nbsp;régularise les émotions
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;offre un moment de recentrage sur soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;diminue le stress
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;diminue les insomnies
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;augmente la confiance en soi
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;augmente la capacité de concentration
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;lève les blocages, les angoisses, les peurs,...
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;aide à surmonter les dépendances
            <br/>•&nbsp;&nbsp;&nbsp;&nbsp;aide lors au travail de deuil</p>
            </div>
            <p className="underlineText" id="lahochiText5">Il est important de noter que le LaHoChi travaille au «nettoyage» des nemoires cellulaires. </p>
            <p id="lahochiText6">

Nous avons ancrés au plus profond de nous, un nombre incalculable «d'informations» enregistrées tout au long de notre vie, et ce depuis notre conception. Ces «informations», dont nous n'avons pas conscience, proviendraient aussi de nos vies anterieures et de tout ce que nous ont légué nos ancêtres. Lorsque ces mémoires sont discordantes, elles engendrent des émotions, des comportements que nous ne comprenons pas et qui nous font souffrir.
            </p>
        </div>
        <div id="footerLahochi">
        <Footer/>
        </div>
        </div>
    );
}

export default Lahochi;