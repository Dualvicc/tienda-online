class Logo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .headerLogo{
                min-width: 10rem;
                max-width: 10rem;
            }
            .headerLogo img{
                width: 100%;
                object-fit: cover;
            }
            * {
            margin: 0;
            box-sizing: border-box;
        }
        </style>
        <div class="headerLogo">
            <img src="./assets/images/logo-3.webp" />
        </div>
        `;
    }
}

customElements.define('logo-component', Logo);