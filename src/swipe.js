class Swipe extends HTMLElement {

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
        .modalProduct{
            width: 110%;
            display: flex;
            height: 100%;
            left: 45%;
            transition: 0.3s;
            background-color:  hsl(0, 0%, 100%);
            position: absolute;
        }
        .modalProduct.active{
            transform: translateX(-50%);
        }
        </style>
        <div class="modalProduct">
            <slot name="visible"></slot>
            <slot name="hidden"></slot>
        </div>
        `;
    }
}

customElements.define('swipeable-component', Swipe);