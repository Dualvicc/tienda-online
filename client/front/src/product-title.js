class ProductTitle extends HTMLElement {

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
        .ElementTitle{
            display: flex;
            flex-direction: column;
            justify-content: left;
            gap: 0.5rem;
        }
        .ElementTitleCategory h4{
            color: grey;
            font-weight: 400;
        }
        .ElementTitleContent h2{
            font-weight: 600;
            font-size: 2rem;
            color: black;
        }
        .ElementTitleSpecific h5{
            color:hsl(0, 0%, 73%);
        }
        .ElementTitlePrice{
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        .PriceOriginal{
            font-size: 1.5rem;
            text-decoration: line-through;
        }
        .PriceActual{
            font-size: 2rem;
            color: hsl(209, 100%, 50%);
            font-weight: 600;
        }
        .PriceTag{
            background-color: hsl(18, 100%, 57%);
            border-radius: 5px;
            display: flex;
            height: 1rem;
        }
        .PriceTag p{
            font-size: 0.7rem;
            font-weight: 600;
            color: hsl(0, 9%, 96%);
            align-self: center;
        }
        </style>
        <div class="ElementTitle">
            <div class="ElementTitleCategory">
                <h4>CURSOS ONLINE</h4>
            </div>
            <div class="ElementTitleContent">
                <h2>CURSO REACT 2023</h2>
            </div>
            <div class="ElementTitleSpecific">
                <h5>IFCD0210</h5>
            </div>
            <div class="ElementTitlePrice">
                <div class="PriceOriginal">€200</div>
                <div class="PriceActual">FREE</div>
                <div class="PriceTag">
                    <p>EARLY ACCES OFFER</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('product-title-component', ProductTitle);