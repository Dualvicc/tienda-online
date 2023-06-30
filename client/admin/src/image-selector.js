import { API_URL } from '../config/config.js'
class ImageSelector extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});  
        this.image= "";
        this.name = this.getAttribute('name');
    }

    static get observedAttributes () { return ['name'] }

    async connectedCallback() {

        document.addEventListener("imageSelected", async event =>{
            this.image = event.detail
            await this.render();

        })
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
        .label{
            color: white;
            font-weight: bold;
        }
        .gallery {
            width: 100px;
            height: 100px;
            background-color: #f2f2f2;
            border: 2px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
        }
        .plus {
        font-size: 40px;
        color: #555;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
        img {
            max-width: 100%;
            max-height: 100%;
        }
        
        </style>
            <div class="gallery" >
                ${this.image!="" ?  
                    `<div class="plus"> <img src= "${this.image.imageName}" alt="${this.image.alt}" title="${this.image.title}" /> </div>`
                    :
                    `<div class="plus">+</div>`}
                
                <input type="file" id="filePicker" style="display: none;">
            </div>
        `;

        this.renderGallery();
    }
    renderGallery = async () => {
        const gallery = this.shadow.querySelector('.gallery');

        gallery.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('openGallery' , {
                detail: {
                    name : gallery.getAttribute('name')
                }
            }));
        });
    };
  
}

customElements.define('image-selector-component',ImageSelector);
