
class ModalComposition extends HTMLElement {

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
        .composition{
            width: 100%;
            height: 100%;
            position: absolute;
            overflow: hidden;
            background-color: hsl(0, 9%, 96%)
        }
        .45%{
            min-width: 45%;
            max-width: 45%;
            height: 100%;
            z-index: 2000;
        }
        .55%{
            min-width: 55%;
            max-width: 55%;
            height: 100%;
            z-index: 2000;
            left: 45%;
        }
        </style>
        <div class="composition">
            <div class="45%">
                <slot name="left"></slot>
            </div>
            <div class="55%">
                <slot name="right"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('modal-composition-component', ModalComposition);