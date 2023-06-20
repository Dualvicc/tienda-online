class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const width = this.attributes.getNamedItem('width').value;
        const height = this.attributes.getNamedItem('height').value;
        this.use = '';
        this.render(width,height);
    }

    async connectedCallback () {
        document.addEventListener("openModal",(event)=>{
            const modal = this.shadow.querySelector(".modal");
            modal.classList.toggle("active");
        });
        document.addEventListener("closeModal",()=>{
            const modal = this.shadow.querySelector(".modal");
            modal.classList.toggle("active");
        });
    }

    render(width, height) {

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
            width: ${width};
            z-index: 1000;
            height: ${height};
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
        </style>
        <div class="modal" id="modal">
            <div class="modalBackground modalButton">
            </div>
            <div class="modalCard">
                <div class="closeButton modalButton">
                    <button>x</button>
                </div>
                <slot name="composition"></slot>
            </div>
        </div>
        `;

        const modalButtons = this.shadow.querySelectorAll(".modalButton")
        const modal = this.shadow.querySelector("#modal");
       
        modalButtons.forEach(modalButton => {
            modalButton.addEventListener("click",()=>{
                modal.classList.toggle("active"); 
            })
        })
    }
}

customElements.define('modal-component', Modal);