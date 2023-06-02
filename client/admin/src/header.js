class Header extends HTMLElement {

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
        .header{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 10vh;
            margin-bottom: 2rem;
        }
        .headerLogo{
            width: 10%;
            display: flex;
            justify-content: left;
            align-items: center;
        }
        h2{
            color:white;
            font-size: 3rem;
        }
        .headerTitle{
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .headerMenu{
            width: 10%;
            display: flex;
            justify-content: flex-end;
        }
        .hamburgerButton {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 0.8rem;
            justify-content: center;
            right: 0;
            transition: all 0.3s ease-in-out;
            width:50%;
        }
          
        .hamburgerButton span {
            background-color: #fff;
            display: block;
            transition: all 0.3s ease-in-out;
            width: 100%;
            height: 4px;
        }
        
        .hamburgerButton.active{
            position: relative;
        }
        
        .hamburgerButton.active span:first-of-type {
            transform: translateY(26px) rotate(45deg);
        }
          
        .hamburgerButton.active span:nth-of-type(2) {
            opacity: 0;
        }   
          
        .hamburgerButton.active span:last-of-type {
            transform: translateY(-5px) rotate(-45deg);
        }
        
        </style>
            <div class="header" id="header">
                <div class="headerLogo">
                    <h2>Detectib</h2>
                </div>
                <div class="headerTitle">
                    <h2>Clientes</h2>
                </div>
                <div class="headerMenu">
                    <div class="hamburgerButton">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        const hamburgerButton = this.shadow.querySelector(".hamburgerButton")
        hamburgerButton.addEventListener("click",()=>{
            hamburgerButton.classList.toggle("active");
            hamburgerButton.parentElement.classList.toggle("active");
                
            let svgs = hamburgerButton.querySelectorAll("svg");

            svgs.forEach(svg => {
                svg.classList.toggle("active");
            });
        });
        

    }
}

customElements.define('header-component',Header);
