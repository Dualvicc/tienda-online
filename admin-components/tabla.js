class Tabla extends HTMLElement {

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
        .tabla{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            
            margin: 0;
        }
        .tablaElement{
            height: 12vh;
            display: flex;
            flex-direction: column;
        }
        .elementHeader{
            width: 100%;
            height: 40%;
            background-color: hsl(207, 85%, 69%);
            display: flex;
            justify-content: end;
        }
        .editButton{
            height: 100%;
            width: 2.5rem;
        }
        svg{
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(1) sepia(1) saturate(7) hue-rotate(175deg);
        }
        .deleteButton{
            height: 100%;
            width: 2.5rem;
        }
        .elementContent{
            width: 100%;
            height: 60%;
            background-color: hsl(226, 64%, 66%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
        }
        .elementContentEmail{
            display: flex;
            gap: 0.5em;
            color:white;
        }
        .elementContentUser{
            display: flex;
            gap: 0.5em;
            color:white;
        }
        </style>
        <div class="tabla">
            <div class="tablaElement">
                <div class="elementHeader">
                    <div class="editButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                    </div>
                    <div class="deleteButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                    </div>
                </div>
                <div class="elementContent">
                    <div class="elementContentEmail">
                        <h4> Email : </h4>
                        <p>perico_moreno@gmail.com</p>
                    </div>
                    <div class="elementContentUser">
                        <h4> User : </h4>
                        <p> JoseLuis </p>
                    </div>
                </div>
            </div>
            <div class="tablaElement">
                <div class="elementHeader">
                    <div class="editButton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>

                    </div>
                    <div class="deleteButton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                    </div>
                </div>
                <div class="elementContent">
                    <div class="elementContentEmail">
                        <h4> Email : </h4>
                        <p>su_rubio@gmail.com</p>
                    </div>
                    <div class="elementContentUser">
                        <h4> User : </h4>
                        <p> JoseLuis </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('tabla-component',Tabla);
