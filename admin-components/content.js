class Content extends HTMLElement {

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
            display: flex;
            justify-content: space-between;
        }
        .tabla{
            width:30%;
        }
        .form{
            width: 65%;
        }
        </style>
        <div class="main">
            <div class="tabla">
                <slot name="tabla"></slot>
            </div>
            <div class="form">
                <slot name="form"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('content-component',Content);
