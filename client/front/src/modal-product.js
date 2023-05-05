class ProductInfo extends HTMLElement {

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
        .productInfo{
            width: 50%;
            height: 100%;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            padding: 2rem 0;
            gap: 2rem;
            position: absolute;
        }
        .productInfo.active{
            transform: translateX(-50%);
        }
        .productInfoElement{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 3rem;
        }
        .productInfoElement:not(:last-child)::after{
            content: "";
            width: 100%;
            height: 1px;
            background-color:  hsl(0, 9%, 96%);
            margin-top: 1rem;
        }
        </style>
        <div class="productInfo">
            <div class="productInfoElement">
                <slot name="Top"></slot>
            </div>
            <div class="productInfoElement">
                <slot name="Mid"></slot> 
            </div>
            <div class="productInfoElement">
                <slot name="Bottom"></slot>
            </div>
            <div class="productInfoElement">
                <slot name="Swipe"></slot>
            </div>
        `;
    }
}

customElements.define('product-info-component', ProductInfo);