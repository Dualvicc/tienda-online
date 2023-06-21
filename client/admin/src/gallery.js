class Gallery extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.fileOption = "upload-option";
    }
  
    connectedCallback() {
      document.addEventListener("openGallery", () => {
        const modal = this.shadow.getElementById('modal');
        modal.classList.toggle("active");
      })
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
          this.fileOption = selectedOption;
  
          for (let i = 0; i < imageOptions.length; i++) {
            imageOptions[i].classList.remove("active");
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
      });
  
      // Hacer algo con la respuesta del servidor si es necesario
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
  
              <div class="image-selection">
                <div class="image-input">
                  ${this.fileOption === "upload-option" ? 
                    `
                    <form class="image-form" id="image-form" enctype="multipart/form-data">
                      <input type="file" class="file-input" multiple="false" name="image"/>
                      <button type="submit">Añadir Imagen</button>
                    </form>
                    ` 
                    :  
                    `¿componente de galería?`}
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
            width: 100%;
            height: 75%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #F3F3F3;
            border: 1px solid #C2C2C2;
            border-radius: 10px;
            border-top-left-radius: 0;               
          }
          .image-form {
            display: flex;
            flex-direction: column;
            gap: 2rem
          }
          .image-form button {
            background-color: rgba(109,183,243,255);
            border: none;
            font-size: 1rem;
            color: white;
            font-weight: 800;
            padding: 0.5rem;
            cursor: pointer;
          }
          .exit {
            width: 2rem;
            cursor: pointer
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
    }
  }
  
  customElements.define('gallery-component', Gallery);
  