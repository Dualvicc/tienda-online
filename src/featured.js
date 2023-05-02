class Featured extends HTMLElement {

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
        .featured{
            background-color:  hsl(0, 0%, 100%);
            display:flex;
            flex-direction: column;
            height: 80vh;
            padding: 5% 15%;
            gap: 1rem;
            align-items: center;
        }
        .featuredTitle{
            text-align: center;
        }
        .featuredTitle h2{
            color: hsl(0, 0%, 24%);
            font-size: 3rem;
            font-weight: 600;
        }
        .featuredDescription{
            text-align: center;
            width: 50%;
            margin-bottom: 5%;
        }
        .featuredDescription p{
            font-size: 1.2rem;
            font-weight: 300;
            line-height: 30px;
        }
        .featuredDescription::after{
            content: '';
            background-color: hsl(0, 12%, 93%);
            width: 82px;
            height: 6px;
            display: block;
            margin: 2rem auto;
        }
        .featuredElements{
            display: flex;
            justify-content:space-around;
        }
        .featuredElementsElement:not(:last-child)::after {
            content: url(../assets/icons/greater-than.svg);
            width: 30px;
            opacity: 0.3;
            height: 63px;
            position: absolute;
            top:100px;
            right: -45px;
        }
        .featuredElementsElement{
            display: flex;
            position: relative;
            flex-direction: column;
            width: 30%;
            align-items: center;
            gap:0.5rem;
        }
        .featuredElementsElementImg{
            width: 10rem;
            height: 10rem;
            margin-bottom: 2rem;
        }
        .featuredElementsElementImg img{
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
        .featuredElementsElementTitle{
            text-align: center;
        }
        .featuredElementsElementTitle h3{
            color: hsl(0, 0%, 24%);
            font-size: 1.6rem;
            font-weight: 600;
        }
        .featuredElementsElementDescription{
            text-align: center;
        }
        .featuredElementsElementDescription p{
            font-size: 1rem;
            font-weight: 300;
            line-height: 30px;
            text-align: center;
        }
        </style>
        <section class="featured" id="featured">
        <div class="featuredTitle">
            <h2>COMO FUNCIONA REACT</h2>
        </div>
        <div class="featuredDescription">
            <p>React utiliza en su sintaxis Html, Css y Javascript para crear un unico archivo que formara un componente en nuestra interfaz de usuario</p>
        </div>
        <div class="featuredElements">
            <div class="featuredElementsElement">
                <div class="featuredElementsElementImg">
                    <img src="./assets/images/html-logo-1.webp" alt=""/>
                </div>
                <div class="featuredElementsElementTitle">
                    <h3>Html 5</h3>
                </div>
                <div class="featuredElementsElementDescription">
                    <p>Establecemos dentro de un único elemento html todo el contenido que necesitemos</p>
                </div>
            
            </div>
            <div class="featuredElementsElement">
                <div class="featuredElementsElementImg">
                    <img src="./assets/images/css-logo.webp"alt=""/>
                </div>
                <div class="featuredElementsElementTitle">
                    <h3>Css 3</h3>
                </div>
                <div class="featuredElementsElementDescription">
                    <p>Con el Css le daremos estilo al componente </p>
                </div>
              
            </div>
            
            <div class="featuredElementsElement">
                <div class="featuredElementsElementImg">
                    <img src="./assets/images/javascript-icon.webp" alt=""/>
                </div>
                <div class="featuredElementsElementTitle">
                    <h3>Javascript</h3>
                </div>  
                <div class="featuredElementsElementDescription">
                    <p>Con Javascript le daremos funcionalidades al componente</p>
                </div>
            </div>
        </div>
    </section>
        `;
    }
}

customElements.define('featured-component', Featured);