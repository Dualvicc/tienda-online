class ModalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }
    connectedCallback() {
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .headerCheckoutbutton button{
                width: 100%;
                border-radius: 25px;
                border: none;
                color: white;
                padding: 0.7rem 3rem;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: 500;
                transition: all 0.5s ease;
                cursor: pointer;
                font-family: "Poppins", sans-serif;
                background-color: hsl(18, 100%, 57%);

            }
            
            .headerCheckoutbutton button:hover{
                background-color:  hsl(204, 15%, 26%);
            }
            button, input, optgroup, select, textarea {
                font-size: 100%;
                line-height: 1.15;
            }
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        </style>
        <div class="headerCheckoutbutton">
            <button type="button" class="checkoutButton modalButton">Apúntate !</button>
        </div>
        `;
        const openModal = new CustomEvent("openModal");
        const modalButtons = this.shadow.querySelectorAll(".modalButton");
       
        modalButtons.forEach(modalButton => {
            modalButton.addEventListener("click",()=>{
                document.dispatchEvent(openModal); 
            })
        })
    }
}

customElements.define('modal-button-component', ModalButton);