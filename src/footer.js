class Footer extends HTMLElement {

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
        ul {
            list-style-type: none;
        }
        footer{
            display: flex;
            flex-direction: column;
            height: 25vh;
            background-color:hsl(0, 0%, 100%);
            gap: 1rem;
        }
        .footerSocials{
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            padding: 2% 20%;
        }
        .footerSocials::after{
            content: '';
            position: absolute;
            background-color: hsl(0, 12%, 93%);
            width: 60%;
            height: 1px;
            margin-top: 80px;
        }
        .footerSocialsElement{
            width: 3.5rem;  
            filter: invert(0.4) sepia(1) saturate(7) hue-rotate(175deg);
            opacity: 0.5;
        }
        .footerSocialsElementImg{
            width: 2rem;
        
        }
        .footerSocialsElementImg img{
            width: 100%;
            height: 10vh;
            
        }
        .footerMenu{
            align-self: center;
        }
        .footerMenu ul{
            display:flex;
            justify-content: center;
        
        }
        .footerMenu ul li a{
            font-weight: 300;
            color:  hsl(209, 100%, 80%);
            transition: all 0.3s ease;
        }
        .footerMenu ul li a:hover{
            opacity: 0.9;
            color: hsl(0, 0%, 0%);
        }
        .footerMenu ul li:not(:last-child)::after{
            content: ' ';
            filter: invert(0.4) sepia(1) saturate(7) hue-rotate(175deg);
            opacity: 0.5;
            padding: 0 13px;
            line-height: 15px;
        }
        .footerCopyright{
            align-self: center;
            opacity: 0.5;
            font-weight: 300;
        }
        .footerCopyright p{
            font-weight: 300;
            font-size: 1rem;
        }
        
        </style>
        <footer class="footer" id="social">
        <div class="footerSocials">
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/facebook.svg" alt=""/>
                    </div>  
                </a>
            </div>
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/twitter.svg" alt=""/>
                    </div>
                </a>
            </div>
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/linkedin.svg" alt=""/>
                    </div>  
                </a>
            </div>
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/youtube.svg" alt=""/>
                    </div>                  
                </a>
            </div>
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/google-plus.svg" alt=""/>
                    </div>              
                </a>
                
            </div>
            <div class="footerSocialsElement">
                <a href="">
                    <div class="footerSocialElementImg">
                        <img src="./assets/icons/pinterest.svg" alt=""/>
                    </div>
                </a>
            </div>
        </div>
        <div class="footerMenu">
            <ul>
                <li>
                    <a href="#">
                        PressKit
                    </a>
                </li>
                <li>
                    <a href="#">
                        Mobile App
                    </a>
                </li>
                <li>
                    <a href="#">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Terms of Use
                    </a>
                </li>
            </ul>
        </div>
        <div class="footerCopyright">
            <p>Copyright ©Pedruscos. Perez. All rights reserved</p>
        </div>
    </footer>
        `;
    }
}

customElements.define('footer-component', Footer);