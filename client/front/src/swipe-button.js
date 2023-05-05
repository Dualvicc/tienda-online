class SwipeButton extends HTMLElement {

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
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        .Checkoutbutton{
            width: 100%;
        }
        .Checkoutbutton button{
            background-color: hsl(209, 100%, 50%);
            border: none;
            color: white;
            width: 100%;
            padding: 1.5rem 0;
            font-size: 1.5rem;
            font-weight: 500;
            transition: all 0.5s linear;
            margin-bottom: 2rem;
        
        }
        .Checkoutbutton button:hover{  
            background-color: hsl(0, 0%, 24%);
        }
        </style>
        <div class="Checkoutbutton swipeButton">
            <button>CHECKOUT</button>
        </div>
        `;
    }
}

customElements.define('swipe-button-component', SwipeButton);