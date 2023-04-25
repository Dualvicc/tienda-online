class Slider extends HTMLElement {

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
            user agent stylesheet
            section {
                display: block;
            }
            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            .slider{
                display: flex;
                flex-direction: column;
                position: relative;
                align-items: center;
                height: 100vh;
                padding-top: 10vh;
                gap: 2rem;
            }
            .sliderTitle{
                text-align: center;
                z-index: 2;
                padding:  3% 5% 0 5%;
            }
            .sliderTitle h1{
                color:  hsl(0, 0%, 24%);
                font-size: 5rem;
                font-weight: 600;
                letter-spacing: -3px;
            }
            .sliderDescription{
                text-align: center;
                z-index: 2;
                width: 45%;
            }
            .sliderDescription p{
                font-size: 1.7rem;
                font-weight: 300;
                line-height: 40px;
            }
            .sliderCheckoutbutton{
                align-items: center;
                z-index: 2;
            }
            .sliderCheckoutbutton button{
                border-radius: 60px;
                width: 100%;
                background-color: hsl(209, 100%, 50%);
                border: none;
                color: white;
                padding: 1.1rem 6rem;
                font-size: 2rem;
                font-weight: 500;
                transition: all 0.5s linear;
            }
            .sliderCheckoutbutton button:hover{
                
                background-color:  hsl(204, 15%, 26%);
            }
            .sliderImage{
                width: 15%;
                z-index: 2;
                position: absolute;
                bottom: 0;
                margin-bottom: 4rem;
            }
            .sliderImage img{
                object-fit: contain;
                width: 100%;
                height: 100%;
                @include translateYInScreen(1s,3s);
            }
            .sliderBackground{
                position: absolute;
                z-index: -99;
                width: 100%;
                height: 90vh;
            }
            .sliderBackground img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: bottom;
            }
        </style>
        <section class="slider" id="product">
        <div class="sliderTitle">
            <h1>The future of tech is here</h1>
        </div>
        <div class="sliderDescription">
            <p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital.

            </p>
        </div>
        <div class="sliderCheckoutbutton">
            <button type="button" class="checkoutButton modalButton">
                Empieza ya!
                <img src="" alt="">
            </button>
        </div>
        <div class="sliderBackground">
            <img src="./assets/images/slider-background.webp" alt="">

        </div>
        <div class="sliderImage">
            <img src="./assets/images/react-slider-removebg-preview.webp">
        </div>

    </section>
        `;
    }
}

customElements.define('slider-component', Slider);