class PlusMinusButton extends HTMLElement {

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
        .plusMinusButton{
            display:flex;
            align-items: center;
            width: 100%;
            border: 1px solid black;
            height: 2rem;
        }
        .minus{
            width: 30%;
            height: 100%;

        }
        .minus button{
            width: 100%;
            border: none;
            height: 100%;
            color: black;
            background-color: hsl(18, 100%, 57%);
        }
        .minus button:hover{

        }
        .input{
            width: 40%;
            height: 100%;
        }
        .input input{
            text-align: center;
            width: 100%;
            height: 100%;
        }
        .plus{
            width: 30%;
            height: 100%;

        }
        .plus button{
            border:none;
            width: 100%;
            color: black;
            height: 100%;
            background-color: hsl(209, 100%, 50%);
        }
        .plus button:hover{
            border:none;
        }
        </style>
        <div class="plusMinusButton">
            <div class="minus" id="minusButton">
                <button class="amountButton minusButton">-</button>
            </div>
            <div class="input" >
                <input id="productAmount" type="number" value="1">
            </div>
            <div class="plus" >
                <button id="plusButton" class="amountButton plusButton">+</button>
            </div>
        </div>
        `;
    }
}

customElements.define('plus-minus-button-component', PlusMinusButton);