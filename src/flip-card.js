class FlipCard extends HTMLElement {

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
        .contactCard{
            width: 40rem;
            height: 45vh;
            flex-direction: column;
            background-color: hsl(0, 0%, 100%);
            z-index: 2;
            position: relative;
        }
        .contactCard.active .contactCardFront{
            transform: perspective(1000px) rotateY(180deg);
        }
        .contactCard.active .contactCardBack{
            transform: perspective(1000px) rotateY(0deg);
        }
        </style>
        <div class="contactCard">
            <slot name="front"></slot>
            <slot name="back"></slot>
        </div>
    </section>
        `;
    }
}

customElements.define('flipcard-component', FlipCard);