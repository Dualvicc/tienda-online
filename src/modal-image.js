class Image extends HTMLElement {

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
        .modalCarrousel{
            width: 45%;
            height: 100%;
            z-index: 2000;
            position: absolute;
        }
        .modalCarrouselImage{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .modalCarrouselImage img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        </style>
        <div class="modalCarrousel">
                <div class="modalCarrouselImage">
                    <img src="./assets/images/atomic-model-logo.webp">
                </div>
                <div class="modalCarrouselImage">
                </div>
                <div class="modalCarrouselImage">
                </div>
        </div>
        `;
    }
}

customElements.define('image-component', Image);