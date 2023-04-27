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
        body{
            display:flex;
            flex-direction: column;
            background-color: hsl(226, 63%, 45%);
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding:  0 8%;
        }
        .header{
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: hsl(226, 63%, 45%);
            height: 10vh;
            margin-bottom: 2rem;
        }
        .headerLogo{
            width:15%;
            display: flex;
            justify-content: left;
            align-items: center;
            ;
        }
        h2{
            color:white;
            font-size: 3rem;
        }
        .headerTitle{
            width:15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .headerMenu{
            width: 5%;
            display: flex;
            justify-content: flex-end;
        }
        .hamburgerButton{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;
        }
        .hamburgerButton span {
            background-color: #fff;
            height: 5%;
            margin: 0.1rem auto;
            transition: all 0.3s ease-in-out;
            width: 100%;
            align-items: end;
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
    }
}

customElements.define('header-component',Header);
