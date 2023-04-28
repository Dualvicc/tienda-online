class Tabs extends HTMLElement {

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
        .tabs{
            display: flex;
            flex-direction: column;
            height: 20vh;
        }
        .tabsHeader{
            display: flex;
            width: 100%;
            gap: 1px;
        }
        .tab{
            height: 2rem;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            text-align: center;
            display: flex;
            align-items: center;
            background-color: hsl(209, 100%, 50%);
        }
        .tab.active{
            background-color:  hsl(18, 100%, 57%);
        }
        .tab h4{
            font-size: 0.8rem;
        }
        .tab.active h4{
            color:white;
        }
        .tabsContents{
            width: 100%;
            height: 80%;
            overflow: hidden;
        }
        .tabContent{
            display:none;
        }
        .tabContent.active{
            background-color: hsl(18, 100%, 57%);
            display:flex;
        }
        .tabContent.active p{
            color:white;
        }
        </style>
        <div class="tabs">
            <div class="tabsHeader">
                <div class="tab active" data-tab="description">
                    <h4>Descripcion</h4>
                </div>
                <div class="tab" data-tab="features">
                    <h4>Características</h4>
                </div>
                <div class="tab" data-tab="recommendations">
                    <h4>Recomendaciones</h4>
                </div>
            </div>
            <div class="tabsContents">
                <div class="tabContent active" data-tab="description">
                    <p>Buenos dias soy la descripcion y espero que te vaya bien en la vida</p>
                </div>
                <div class="tabContent" data-tab="features">
                    <p>El aliento de mi gato huele a comida de gato. No veas como está el Willy</p>
                </div>
                <div class="tabContent" data-tab="recommendations">
                    <p>Mejor tarde que nunca. Te me cuidas compañero</p>
                </div>

            </div>
        </div>
        `;
    }
}

customElements.define('tabs-component', Tabs);