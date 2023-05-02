class Form extends HTMLElement {

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
        .area{
            width: 100%;
            height: 100%;
        }
        .bar{
            width: 100%;
            height: 3rem;
            background-color: white;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;
        }
        .tabs{
            display:flex;
            width: 25%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
        .tabMain{
            background-color: hsl(207, 85%, 69%);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .tabMain h3{
            color: white;
            font-size: 1.2rem;
        }
        .tabUpload{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .tabUpload h3{
            color: grey;
            font-size: 1.2rem;
        }
        .barButtons{
            display: flex;
            margin-right: 0.8rem;
        }
        .cleanButton{
        }
        svg{
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);
        }
        .register{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 60%;
        }
        .row{
            display:flex;
            width: 100%;
            height: 45%;
            gap: 2rem;
            justify-content: space-between;
        }
        .formInput{
            width: 48%;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
        }
        .input{
            height: 2rem;
        }
        input:focus {
            outline: none;
        }
        .input input{
            width: 100%;
            height: 100%;
            background-color: hsl(226, 64%, 66%);
            border: none;
            border-bottom: 1px solid white;
            color: white;
        }
        .label{
            color: white;
            font-weight: bold;
        }
        </style>
        <div class="area">
            <div class="bar">
                <div class="tabs">
                    <div class="tabMain">
                        <h3>Principal</h3>
                    </div>
                    <div class="tabUpload">
                        <h3>Imágenes</h3>
                    </div>
                </div>
                <div class="barButtons">
                    <div class="cleanButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                    </div>
                    <div class="saveButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                    </div>
                </div>
            </div>
            <div class="register form">
                <div class="row">
                    <div class="formInput">
                        <div class="label">Nombre</div>
                        <div class="input">
                            <input type="text"  required>
                        </div>
                    </div>
                    <div class="formInput">
                        <div class="label">Email</div>
                        <div class="input">
                            <input type="text"  required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="formInput">
                        <div class="label">Contraseña
                        </div>
                        <div class="input">
                            <input type="text" required>
                        </div>
                    </div>
                    <div class="formInput">
                        <div class="label">Confirme contraseña</div>
                        <div class="input">
                            <input type="text" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('form-component',Form);
