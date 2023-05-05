class Main extends HTMLElement {

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
            scroll-behavior: smooth;
        }
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
        }
        .main{
            width: 100%;
        }
        </style>
        <section class="main">
            <slot name="tabla"></slot>
            <slot name="form"></slot>
        </section>
        `;
    }
}

customElements.define('main-component',Main);
