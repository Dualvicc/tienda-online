class Pagination extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.page = 1;
        this.totalPages = 1;
    }
    async connectedCallback () {
        document.addEventListener('pagination', async (event) => {   
            this.page = event.detail.page
            this.totalPages = event.detail.totalPages
            this.render();
        })
    }
    static get observedAttributes () { return ['url'] }

    async attributeChangedCallback (name, oldValue, newValue) {
        this.render()
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
        .pagination{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            width: 25%;
            height: 2rem;
            margin: 0;
            position: absolute;
            bottom: 6%;
            
        }
        .element{
            width: 10%;
            background-color: hsl(226, 64%, 66%);
            display: flex;
            justify-content: center;
            height: 100%;
            border-radius: 20%;
            align-items: center;
            cursor: pointer;
            color: white;
        }
        .element:hover{
            background-color: hsl(207, 85%, 69%);
        }
        .element a {
            align-items: center;
            margin: auto;
            text-color: white;
            color: white;
        }
        a{
            color: white;
            text-color: white;
        }
        
        </style>
        <div class="pagination">
            <div class="element" data-id="first">
                <a > << </a>
            </div>
            <div class="element" data-id="-1">
                <a > < </a>
            </div>
            <div class="element" data-id="page">
                <a ></a>
            </div>
            <div class="element" data-id="+1">
                <a > > </a>
            </div>
            <div class="element" data-id="last">
                <a > >> </a>
            </div>  
        </div>
        `;
        const pageNumber = this.shadow.querySelector('.element[data-id="page"]');
        pageNumber.textContent = this.page;

        const pageButtons = this.shadow.querySelectorAll('.element')
        pageButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const buttonId = button.getAttribute('data-id');
    
                if (buttonId === 'first') {
                    if (this.page != 1 && this.page != null) {
                        this.page = 1;
                        document.dispatchEvent( new CustomEvent('changePage', {
                            detail: {
                                 page : this.page
                            }
                        }))
                        this.render();
                    }
                } else if (buttonId === '-1') {
                    if(this.page > 1) {
                        this.page = this.page - 1
                        document.dispatchEvent( new CustomEvent('changePage', {
                            detail: {
                                 page : this.page
                            }
                        }))
                        this.render();
                    }
                } else if (buttonId === '+1') {
                    if(this.page != this.totalPages) {
                        this.page++
                        document.dispatchEvent( new CustomEvent('changePage', {
                            detail: {
                                 page : this.page
                            }
                        }))
                        this.render();
                    }
                } else if (buttonId === 'last') {
                    if (this.page != this.totalPages) { 
                        this.page = this.totalPages;
                        document.dispatchEvent( new CustomEvent('changePage', {
                            detail: {
                                 page : this.page
                            }
                        }))
                        this.render();
                    }
                }
            })
        })
    }
}

customElements.define('pagination-component', Pagination);
