import { API_URL } from '../config/config.js'
class Form extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});   
        this.images = [];
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback() {

        document.addEventListener("deleteImage", async event => {
            this.images.forEach((image, index) => {
                if(image.name == event.detail.name){
                    this.images.splice(index, 1);
                }
            });
        });
        document.addEventListener("loadData", async event => {
            await this.loadData(event.detail.id);
        })
        document.addEventListener("imageSelected", async event => {
            const existingImageIndex = this.images.findIndex(image => image.name === event.detail.name);
          
            if (existingImageIndex !== -1) {
              this.images[existingImageIndex] = event.detail;
            } else {
              this.images.push(event.detail);
            }
          
          });
    }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.render()
    }
    
    async render() {

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
        .tab{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .tab.active{
            background-color: hsl(207, 85%, 69%);
        }
        .tab:hover{
            background-color: grey;
            opacity: 0.5;
        }
        .tab:hover h3{
            color: white;
        }
        .tab.active h3{
            color: white;
            font-size: 1.2rem;
        }
        .tab{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .tab h3{
            color: grey;
            font-size: 1.2rem;
        }
        .barButtons{
            display: flex;
            margin-right: 0.8rem;
        }
        .cleanButton{
            cursor:pointer;
        }
        .cleanButton:hover svg{
            filter: none;
        }
        .saveButton{
            cursor:pointer;
        }
        .saveButton:hover svg{
            filter: none;
        }
        svg{
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);
        }
        .register{
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
            height: 60%;
            display: none;
        }
        .register.active{
            display: flex;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 2rem;
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
        .tabContent{
            display:none;
        }
        .tabContent.active{
            display:flex;
        }
        p{
            color: white;
        }
        .errorContainer{
            display:flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        </style>
        <div class="area">
            <div class="bar">
                <div class="tabs">
                    <div class="tab active" data-tab="principal">
                        <h3>Principal</h3>
                    </div>
                    <div class="tab" data-tab="upload">
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
            <div class="register form tabContent active" data-tab="principal">
                <form>
                    <div class="row">
                        <div class="formInput">
                            <div class="label">Nombre</div>
                            <div class="input">
                                <input name="name" class="nameInput" type="text"  required>
                            </div>
                        </div>
                        <div class="formInput">
                            <div class="label">Email</div>
                            <div class="input">
                                <input name="email" class="emailInput" type="text"  required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="formInput">
                            <div class="label">Contraseña
                            </div>
                            <div class="input">
                                <input name="password" class="passwordInput" type="password" required>
                            </div>
                        </div>
                        <div class="formInput">
                            <div class="label">Confirme contraseña</div>
                            <div class="input">
                                <input class ="confirmPasswordInput" type="password" required>
                            </div>
                        </div>
                    </div>
                    <div class="row errorContainer">
                    </div>
                </form>
            </div>
            <div class="tabContent imageUpload" data-tab="upload">
                <image-selector-component name="avatar"></image-selector-component>
            </div>
        </div>
        `;

        this.renderTabs();
        this.renderSendButton();
        this.renderCleanButton();
    }
     
    renderTabs = async () => {

        const tabs = this.shadow.querySelectorAll(".tab");
        const tabContents = this.shadow.querySelectorAll(".tabContent");

        tabs.forEach(tab => {
            tab.addEventListener("click",()=>{

                const tabDataset = tab.dataset.tab;

                tabs.forEach(tab =>{
                    tab.classList.remove("active");
                })

                tab.classList.add("active");

                tabContents.forEach(tabContent => {
                    if(tabContent.classList.contains("active")){
                        tabContent.classList.remove("active");
                    }
                    if(tabContent.dataset.tab === tabDataset){
                        tabContent.classList.add("active");
                    }
                })
            })
        });
    }

    renderCleanButton = async () => {

        const cleanButton = this.shadow.querySelector('.cleanButton');
        cleanButton.addEventListener('click', async event => {

            event.preventDefault();

            const form = this.shadow.querySelector('form');
            const saveButton = this.shadow.querySelector('.saveButton');
            form.reset();
            saveButton.dataset.id = "";
            document.dispatchEvent(new CustomEvent('clearInfo')); 
            
        });
    }
    
    renderSendButton = async () => {

        const saveButton = this.shadow.querySelector('.saveButton');

        saveButton.addEventListener('click', async event => {

            event.preventDefault();

            const form = this.shadow.querySelector('form');
            const jsonObject = Object.fromEntries(new FormData(form));
            

            if(this.images.length > 0){
                jsonObject.images = this.images;
            }
            
            const json = JSON.stringify(jsonObject);

            let url = saveButton.dataset.id ? `${API_URL}/api${this.getAttribute('url')}/${saveButton.dataset.id}` : `${API_URL}/api${this.getAttribute('url')}`;
            let method = saveButton.dataset.id ? 'PUT' : 'POST';

            await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('bearerToken')         
                },
                body: json
            })
            .then( async response => {
                if (response.ok) {
                    document.dispatchEvent(new CustomEvent('dataUpdate', {
                        detail: {
                            page : 1
                        }
                    }))
                    const cleanButton = this.shadow.querySelector('.cleanButton');
                    cleanButton.click();


                } else {
                    const respuesta = await response.json()
                    this.renderErrors(respuesta.message);
                }
            })
            .catch(error => {
                console.error('Error en la petición:', error);
            });

        });
    }

    loadData = async id => {

        this.shadow.querySelector(".saveButton").dataset.id = id;

        fetch(`${API_URL}/api${this.getAttribute('url')}/${id}`, {
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('bearerToken')         
            },
        })
        .then(response => {
           return response.json()
        })
        .then(data => {
    
            let form = this.shadow.querySelector("form");

            Object.entries(data).forEach( ([key, value]) => {
                if(form.elements[key]){
                    form.elements[key].value = value;
                }

                
                
            });

            const images = data.images || [];

            document.dispatchEvent(new CustomEvent('getUserImages', {
                detail: {
                    images: images,
                }
            }));

        })
        .catch(error => {
            console.error('Error en la petición:', error);
        });
    }
    renderErrors = async (errors) => { 
        const errorContainer = this.shadow.querySelector(".errorContainer");
        
        while (errorContainer.firstChild) {
            errorContainer.removeChild(errorContainer.firstChild);
        }
        errors.forEach( error => {
            const errorMessage = document.createElement("p")
            errorMessage.textContent = error.message;
            errorMessage.classList.add("errorMessage");
            errorContainer.appendChild(errorMessage);
        })
    }

}

customElements.define('form-component',Form);
