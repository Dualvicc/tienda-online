class ContactInfo extends HTMLElement {

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
        .contactCardFront{
            position: absolute;
            width: 100%;  
            height: 100%;
            background-color: hsl(0, 0%, 100%);
            backface-visibility: hidden;
            transform: perspective(1000px) rotateY(0deg);
            transition: 1s;
        }
        .contactCardTitle{
            text-align: left;
            margin: 2rem 0 0 2rem;
        }
        .contactCardTitle h2{
            color:hsl(0, 0%, 0%);
            font-weight: 600;
            font-size: 2rem;
        }
        .contactCardElement{
            display: flex;
            gap: 1rem;
            margin: 2rem 0 0 2rem;
            align-items: center;
        }
        .contactCardElementImage{
            width: 1.5rem;
        }
        .contactCardElementImage img{
            object-fit: contain;
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }
        .contactCardElementInfo{
            text-align: left;
        }
        .contactCardElementInfo p{
            opacity: 0.7;
            font-size: 1.2rem;
        }
        .contactCardButton button{
            width: 100%;
            background-color: hsl(209, 100%, 50%);
            border: none;
            color: white;
            padding: 1.1rem 0rem;
            font-size: 1.5rem;
            font-weight: 500;
            transition: all 0.5s linear;
            width: 80%;
            margin: 8% 8% 10% 8%;
        }
        .contactCardButton button:hover{
            
            background-color: hsl(204, 15%, 26%);
        }
        </style>
            <div class="contactCardFront">
                <div class="contactCardTitle">
                    <h2>GET IN TOUCH</h2>
                </div>
                <div class="contactCardElement">
                    <div class="contactCardElementImage">
                        <img src="./assets/icons/location.svg" alt=""/>
                    </div>
                    <div class="contactCardElementInfo">
                        <p>Calle Falsa 123 </p>
                        <p>California, USA</p>
                    </div>

                </div>
                <div class="contactCardElement">
                    <div class="contactCardElementImage">
                        <img src="./assets/icons/phone.svg" alt=""/>
                    </div>
                    <div class="contactCardElementInfo">
                        <p>+1 54878953</p> 
                    </div>

                </div>
                <div class="contactCardElement">
                    <div class="contactCardElementImage">
                        <img src="./assets/icons/email.svg" alt=""/>
                    </div>
                    <div class="contactCardElementInfo">
                        <p>support@lavin.com</p>
                    </div>

                </div>
                <div class="contactCardButton flipButton">
                    <button  type="button">CONTACT US</button>
                </div>
            </div>
    </section>
        `;
    }
}

customElements.define('contact-info-component', ContactInfo);