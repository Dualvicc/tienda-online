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
        
        document.addEventListener("loadData", async event =>{

        });

        document.addEventListener("clearInfo", async event =>{
            this.image="";
            await this.render();
        });

        document.addEventListener("imageSelected", async event =>{
            this.image = event.detail
            await this.render();

        })
        document.addEventListener("getUserImages", async event =>{
            if(event.detail.images.length>0){
                event.detail.images.forEach(async element => {
                    if(element.name == this.name){
                        this.image = {
                            filename: element.originalFilename,
                            alt: element.alt,
                            title: element.title
                        }
                    }
                });

            }else{

                this.image = "";
            }       
            
            await this.render();
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
        .label{
            color: white;
            font-weight: bold;
        }
        .imageSelector {
            width: 135px;
            height: 135px;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
        }
        .gallery {
            width: 100%;
            height: 100%;
        }
        .plus {
        font-size: 40px;
        color: #555;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
        .image {
            width: 100%;
            height: 100%;
        }
        .delete {
            position: absolute;
            justify-content: center;
            display: flex;
            top: -10%;
            right: -10%;
            font-size: 30px;
            cursor: pointer;
            border-radius: 50%;
            border: 2px solid white;
            align-items: center;
            width: 30%;
            height: 30%;
            background-color: hsl(207, 85%, 69%);

        }
        .delete:hover {
            scale : 1.2;
        }
        svg {
            width: 80%;
            height: 80%;
            filter: invert(1) sepia(1) saturate(7) hue-rotate(175deg);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        </style>
            <div class="imageSelector" name="avatar" >
                ${this.image!="" ?  
                    `<div class="image">
                        <img src= "${API_URL}/api/admin/images/${this.image.filename}" alt="${this.image.alt}" title="${this.image.title}" />
                    </div>
                    <div class="delete">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
                        </svg>
                    </div>`
                    :
                    `<div class="gallery" name="avatar" >
                        <div class="plus">+</div>
                    </div>`}
                
                <input type="file" id="filePicker" style="display: none;">
            </div>
            
        `;

        this.renderGallery();

        if(this.image != ""){
            const deleteButton = this.shadow.querySelector('.delete');
            deleteButton.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('deleteImage', {
                    detail: {
                        name : this.name
                    }
                }));
                this.image = "";
                this.render();
            });
        }

        

    }
    renderGallery = async () => {
        let gallery = this.shadow.querySelector('.gallery');

        if (this.image === "") {
            gallery = this.shadow.querySelector('.gallery');
        } else {
            gallery = this.shadow.querySelector('.image');
        }

        gallery.addEventListener('click', () => {
            const eventDetail = {
                name: this.name
            };
    
            if (this.image != "") {
                eventDetail.image = this.image;
            }
            document.dispatchEvent(new CustomEvent('openGallery' , {detail: eventDetail}));
            
        });
    };
  
}

customElements.define('image-selector-component',ImageSelector);
