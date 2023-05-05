class Details extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            text-decoration: none;
            color: hsl(210, 7%, 59%);
            scroll-behavior: smooth;
        }
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
        }
        .details{
            background-color: white;
            display: flex;
            padding: 5% 15%;
            height: 80vh;
            justify-content: space-between;
        
        }
        .detailsColumn{
            display: flex;
            flex-direction: column;
            gap: 5vh;
            width: 30%;
            justify-content: space-around;
        }
        .detailsColumn img{
            width:100%;
            object-fit: cover;
        }
        
        .detailsColumnElement{
            display: flex;
            gap: 1rem;
        }
        .detailsColumnElementIcon{
            width: 3rem;
            filter: invert(0.4) sepia(1) saturate(4) hue-rotate(175deg);
        }
        .detailsColumnElementText{
            display:flex;
            flex-direction: column;
            text-align: left;
        }
        .detailsColumnElementTextTitle h4{
            font-weight: 600;
            font-size: 1.2rem;
            color:black;
        }
        .detailsColumnElementTextDescription p{
            font-weight: 300;
            font-size: 0.9rem;
        }
        .detailsColumnElement.last{
            display:flex;
            flex-direction: row-reverse;
        }
        .detailsColumnElementText.last {
            text-align: right;
        }
        </style>
        <section class="details" id="details">
        <div class="detailsColumn">
            <div class="detailsColumnElement">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/gear.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText">
                    <div class="detailsColumnElementTextTitle">
                        <h4>Componentes</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription">
                        <p>Permite reutilizar y testear mejor partes de la interfaz</p>
                    </div>
                </div>
            </div>   
            <div class="detailsColumnElement">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/simple.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText">
                    <div class="detailsColumnElementTextTitle">
                        <h4>Simplicidad</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription">
                        <p>Reduce la complejidad al dividir en pequeñas piezas</p>
                    </div>
                </div>
            </div>   
            <div class="detailsColumnElement">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/rendimiento.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText">
                    <div class="detailsColumnElementTextTitle">
                        <h4>Rendimiento</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription">
                        <p>Acelera tu trabajo y mejora tu atractivo laboral</p>
                    </div>
                </div>
            </div>     
        </div>
        <div class="detailsColumn">
            <img src="./assets/images/react-details.webp" alt="">
        </div>
        <div class="detailsColumn">
            <div class="detailsColumnElement last">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/actual.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText last">
                    <div class="detailsColumnElementTextTitle last">
                        <h4>Actual</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription last">
                        <p>Actualizado por el equipo de Facebook</p>
                    </div>
                </div>
            </div>         
            <div class="detailsColumnElement last">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/rapido.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText last">
                    <div class="detailsColumnElementTextTitle last">
                        <h4>Rápido</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription last">
                        <p>Fácil de aprender con nuestro curso especializado</p>
                    </div>
                </div>
            </div>  
            <div class="detailsColumnElement last">
                <div class="detailsColumnElementIcon">
                    <img src="./assets/icons/versatil.svg" alt=""/>
                </div>
                <div class="detailsColumnElementText last">
                    <div class="detailsColumnElementTextTitle last">
                        <h4>Versátil</h4>
                    </div>
                    <div class="detailsColumnElementTextDescription last">
                        <p>Utilizado ampliamente en el mercado laboral</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('details-component', Details);