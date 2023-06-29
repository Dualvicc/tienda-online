import { API_URL } from '../config/config.js'


class Gallery extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.fileOption = "upload-option";
    this.images = [];
    this.name = "";
    this.imageName = "";
  }

  connectedCallback() {
    this.images = localStorage.getItem("images")? JSON.parse(localStorage.getItem("images")) : [];
    document.addEventListener("openGallery", () => {
      const modal = this.shadow.getElementById('modal');
      modal.classList.toggle("active");
    });
    
    this.render();
    this.showGallery();
  }

  static get observedAttributes() { return ['url']; }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  selectImageOption = () => {
    const imageOptions = this.shadow.querySelectorAll(".image-option");

    imageOptions.forEach(imageOption => {
      imageOption.addEventListener("click", () => {
        const selectedOption = imageOption.dataset.option;
        const tabContent = this.shadow.querySelectorAll(".image-selection");
        this.fileOption = selectedOption;

        for (let i = 0; i < imageOptions.length; i++) {
          imageOptions[i].classList.remove("active");
          tabContent.forEach(tabContent => {
            tabContent.classList.remove("active");
            if(selectedOption === tabContent.dataset.option){
              tabContent.classList.add("active");
            }
          });
        }

        imageOption.classList.add("active");

      });
    });
  }

  handleFileUpload = async (e) => {
    e.preventDefault();

    const fileInput = this.shadow.querySelector(".file-input");

    if (this.fileOption === 'upload-option') {
      if (fileInput.files.length === 0) {
        console.log("Llamar a una futura función que muestre una alerta");
        return;
      }

      const file = fileInput.files[0];
      await this.sendFile(file);
    }
  }

  sendFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const data = await fetch('http://localhost:8080/api/admin/images', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')         
      }
    })
    .then(response => response.json())
    .then( data => {
      const images = data;
      images.forEach(image => {
        this.images.push(image);
      });
      localStorage.setItem("images", JSON.stringify(this.images));
      this.showGallery();
    })
    .catch(error => {
      console.log(error);
    });
  }

  showGallery() {
    const tabElement = this.shadow.querySelector('.image-option[data-option="select-option"]');
    tabElement.click();

    const imageGallery = this.shadow.querySelector('.image-gallery');
    imageGallery.innerHTML = '';
    this.images.forEach(image => {
      const imageItem = document.createElement('div');
      imageItem.innerHTML = `<img src="${API_URL}/api/admin/images/${image}.webp" alt="Image" title="Image" />`;
      imageItem.classList.add("image-item");
      imageGallery.appendChild(imageItem);

      imageItem.addEventListener("click", () => {
        const imageItems = this.shadow.querySelectorAll(".image-item");

        imageItems.forEach(imageItem => {
          imageItem.classList.remove("active");
        });
        // const nameInput = this.shadow.querySelector('input[name="image"]');
        // const titleInput = this.shadow.querySelector('input[name="title"]');
        // const altInput = this.shadow.querySelector('textarea[name="alt"]'); 

        imageItem.classList.add('active');
        
        // nameInput.value = imageItem.querySelector('img').src || '';
        // titleInput.value = imageItem.querySelector('img').title || '';
        // altInput.value = imageItem.querySelector('img').alt || '';
      });
    });
  }

  render() {
    this.shadow.innerHTML =
      `
      <div class="modal" id="modal">
        <div class="modalBackground modalButton"></div>
        <div class="modalCard">
          <div class="closeButton modalButton">
            <button>x</button>
          </div>
          <div class="image-form-container">
            <div class="title">
              <h3>Añade Imágenes</h3>
            </div>

            <div class="image-options">
              <ul>
                <li class="image-option ${this.fileOption === 'upload-option' ? 'active' : ''}" data-option="upload-option"><p>Subir archivo</p></li>
                <li class="image-option ${this.fileOption === 'select-option' ? 'active' : ''}" data-option="select-option"><p>Biblioteca de medios</p></li>
              </ul>
            </div>

            <div class="image-selection active" data-option="upload-option">
              <div class="image-input">
                  <form class="image-form" id="image-form" enctype="multipart/form-data">

                    <button type="submit">
                        <p>Añadir Imagen</p>
                        <input type="file" class="file-input" multiple="false" name="image"/>
                    </button>
                  </form>
              </div>
            </div>
            <div class="image-selection gallery" data-option="select-option">
              <div class="image-gallery"></div>
            </div>
            <div class="image-column" data-option="select-option">
              <div class="image-info-container">
                <div class="image-info">
                  <label for="image">Nombre de la Imagen</label>
                  <input name="image" type="text" value="" ></input>
                </div>
                <div class="image-info">
                  <label for="alt">Descripción de la Imagen</label>
                  <textarea name="alt" class="image-description-input" placeholder="Descripción" value=""></textarea>
                </div>
                <div class="image-info">
                  <label for="title">Título de la Imagen</label>
                  <input name="title" type="text" placeholder="title" value=""></input>
                </div>
              </div>
              <div class="select-button modalButton">
                Seleccionar
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        h3, p{
          color: #606060;
        }
        .modal{
          display: none;
          width: 100%;
          height: 100vh;
          position: fixed;
          bottom: 0;
        }
        .modal.active{
          display:flex;
          z-index: 1;
          position: fixed;
          top:0;
          left: 0;
          bottom: 0;
          right: 0;
        }
        .modalBackground{
          backdrop-filter: blur(2px);
          height: 100vh;
          z-index: 999;
          transition: all 0.2s ease-in-out;
          width: 100%;
          position: absolute;
        }
        
        .modal.active{
          opacity: 1;
          z-index: 2000;
        }
        .modalCard{
          position: absolute;
          background-color: hsl(0, 0%, 100%);
          width: 80%;
          z-index: 1000;
          height: 80vh;
          margin: auto;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          overflow: hidden; 
        }
        .modalCard .closeButton{
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 2000;
        }
        .modalCard .closeButton button{
          border: none;
          background: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: hsl(0, 0%, 50%);
          transition: 0.5s;
        }
        .closeButton button:hover{
          color: hsl(0, 0%, 0%);
        }
        .image-form-container {
          width: 100%;
          height: 90vh;
          background-color: white;
          padding: 2rem 4rem;
        }
        .title {
          margin-bottom: 1.5rem;
          display:flex;
          justify-content: space-between;
          align-items: center
        }
        .title h3 {
          font-size: 1.5rem
        }
        .image-options {
        }
        .image-options ul{
          list-style: none;
          display: flex;
        }
        .image-options ul li:last-child {
          border-top-right-radius: 5px;
        }
        .image-options ul li:first-child {
          border-top-left-radius: 5px;
        }
        
        .image-options ul li {
          border: 1px solid #C2C2C2;
          padding: 0.25rem 0.5rem;
          transform: translateY(1px);
          cursor:pointer;
        }
        .image-options ul li p {
          font-weight: 600;
        }
        .image-option.active {
          background-color: #F3F3F3;
          border-bottom: none;
        }

        .image-option.active p {
          color: #2F2F2F
        }
        .image-selection {   
          display: none;
          width: 100%;
          height: 75%;
          justify-content: center;
          align-items: center;
          background-color: #F3F3F3;
          border: 1px solid #C2C2C2;
          border-radius: 10px;
          border-top-left-radius: 0;            
        }
        .image-selection.active{
          display:flex;
          gap: 1rem;
        }
        .image-form {
          display: flex;
          flex-direction: column;
          gap: 2rem
          cursor: pointer
        }
        .image-form button {
          background-color: rgba(109,183,243,255);
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }
        .image-form button p {
          position: absolute;
          display: flex;
          font-size: 1rem;
          color: white;
          font-weight: 600;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .image-form button:hover {
          background-color: rgba(109,183,243,255);
          cursor: pointer;
        }
        input[type="file"] {
          opacity: 0;
          cursor: pointer;
        }
        .gallery {
          width: 70%;
        }
        .image-column {
          width: 25%;
          height: 78%;
          position: absolute;
          right: 2rem;
          top: 15%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background-color: #F3F3F3;
          border: 1px solid #C2C2C2;
          border-radius: 10px;     
        }
        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
          grid-template-rows: repeat(auto-fill, minmax(135px, 1fr));
          grid-gap: 1rem;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        .image-item {
          display: block;
          justify-content: center;
          align-items: center;
          background-color: #F3F3F3;
          border: 1px solid #C2C2C2;
          border-radius: 10px;
          padding: 0.5rem;
        }
        .image-item.active {
          transform: scale(1.1);
          border: 4px solid hsl(207, 85%, 69%);
        }
        .image-item img {
          max-width: 100%;
          max-height: 100%;
        }
        .image-info-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0 0.5rem;
          gap: 2rem;
        }
        textarea {
          max-width: 100%;
          min-height: 4rem;
        }
        .image-info {
          display: flex;
          flex-direction: column;
        }
        .select-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: hsl(207, 85%, 69%);
          width: 55%;
          height: 10%;
          padding: 5%;
          text-align: center;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1.5rem;

        }
      </style>
      `;
  
      this.selectImageOption();
  
      const modalButtons = this.shadow.querySelectorAll(".modalButton");
      const modal = this.shadow.querySelector("#modal");
      const fileInput = this.shadow.querySelector(".file-input");
  
      modalButtons.forEach(modalButton => {
        modalButton.addEventListener("click", () => {
          modal.classList.toggle("active");
        });
      });
  
      fileInput.addEventListener("change", this.handleFileUpload);
  
      const imageForm = this.shadow.querySelector(".image-form");
      imageForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      const imageGallery = this.shadow.querySelector(".image-gallery");
      imageGallery.innerHTML = ""; // Clear existing images

      this.images.forEach(image => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const img = document.createElement("img");
        img.src = image.url;

        imageItem.appendChild(img);
        imageGallery.appendChild(imageItem);
      });
    }
  }

  customElements.define('gallery-component', Gallery);
