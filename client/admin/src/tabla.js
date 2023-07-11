import { API_URL } from '../config/config.js'
class Tabla extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = [];
        this.keys = [];
    }
    
    static get observedAttributes () { return ['url'] }

    async connectedCallback () {
        document.addEventListener('dataUpdate', async (event) => {

            await this.loadData(event.detail.page);
        
            document.dispatchEvent(new CustomEvent('pagination',  {
                detail: {
                    page: this.data.meta.currentPage,
                    totalPages: this.data.meta.pages
                 
                }
            }))
            if (this.keys.length > 0) {
                
            }
            
            this.render();
        })
        document.addEventListener('filterData', async (event) => {
            this.data= event.detail.data
            this.render();
        })
        document.addEventListener('changePage', async (event) => {
            await this.loadData(event.detail.page);
            document.dispatchEvent(new CustomEvent('pagination',  {
                detail: {
                    page: this.data.meta.currentPage,
                    totalPages: this.data.meta.pages
                 
                }
            }))
            this.render();
        })

    }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        document.dispatchEvent(new CustomEvent('pagination',  {
            detail: {
                page: this.data.meta.currentPage,
                totalPages: this.data.meta.pages
             
            }
        }))
        this.render()
    }

    async loadData (page = 1) {

        const url = `${API_URL}/api${this.getAttribute('url')}?page=${page}`;
        
        await fetch(url,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('bearerToken')         
            },
        })
        .then(response => response.json())
        .then(data => {
            this.data = data;
        })
        .catch(error => {
          console.error("Error al obtener los datos:", error);
        });
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

        .tabla {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            margin: 0;
        }

        .tablaElement {
            display: flex;
            flex-direction: column;
        }

        .elementHeader {
            width: 100%;
            height: fit-content; 
            background-color: hsl(207, 85%, 69%);
            display: flex;
            justify-content: end;
        }

        .editButton {
            height: 100%;
            width: 2.5rem;
            transition: 0.5s;
            cursor: pointer;
        }

        .editButton:hover svg {
            filter: none;
        }

        svg {
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(1) sepia(1) saturate(7) hue-rotate(175deg);
        }

        .deleteButton {
            height: 100%;
            width: 2.5rem;
            cursor: pointer;
        }

        .deleteButton:hover svg {
            filter: none;
        }

        .elementContent {
            width: 100%;
            height: fit-content;
            background-color: hsl(226, 64%, 66%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
            overflow: auto; 
            padding: 0.5rem; 
        }
        .elementContentItem {
            display: flex;
            gap: 0.5em;
            color: white;
        }
        </style>
        <div class="tabla"></div>
        `;
        
        this.data.rows.forEach(data => {
            let keysSet = new Set();
            Object.keys(data).forEach(key => {
                keysSet.add(key);
            });
            this.keys = Array.from(keysSet);
            this.renderTable(data);
        })

        document.dispatchEvent(new CustomEvent('dataFilters', {
            detail: this.keys 
        }))

        this.renderTableButtons();
        
    }
    
    renderTableButtons() {

        const modalButtons = this.shadowRoot.querySelectorAll('.modalButton');
        modalButtons.forEach(modalButton => {
            modalButton.addEventListener('click',() => {
               document.dispatchEvent( new CustomEvent('openModal', {
                    detail: {
                        use : "delete"
                    }
               }))
               document.dispatchEvent( new CustomEvent('deleteAlert',  {
                    detail: {
                        id: modalButton.dataset.id
                    }
                }));
            })
        })

        const editButtons = this.shadow.querySelectorAll('.editButton')
        editButtons.forEach(button => {
            button.addEventListener('click',() => {
                document.dispatchEvent(new CustomEvent('loadData',  {
                    detail: {
                        id: button.dataset.id,
                     
                    }
                }))
            });
        });
    }
    
    renderTable(data) {
        const table = this.shadow.querySelector('.tabla');
      
        const tablaElement = document.createElement('div');
        tablaElement.classList.add('tablaElement');
      
        const elementHeader = document.createElement('div');
        elementHeader.classList.add('elementHeader');
      
        const editButton = document.createElement('div');
        editButton.classList.add('editButton');
        editButton.dataset.id = data.id;
        const editSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        editSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        editSvg.setAttribute("viewBox", "0 0 24 24");
        const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        editPath.setAttribute("d", "M20.71,7.04C21.10,6.65 21.10,6.00 20.71,5.63L18.37,3.29C18.00,2.90 17.35,2.90 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z");
        editSvg.appendChild(editPath);
        editButton.appendChild(editSvg);
      
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton', 'modalButton');
        deleteButton.dataset.id = data.id;
        const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        deleteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        deleteSvg.setAttribute("viewBox", "0 0 24 24");
        const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        deletePath.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
        deleteSvg.appendChild(deletePath);
        deleteButton.appendChild(deleteSvg);
      
        const elementContent = document.createElement('div');
        elementContent.classList.add('elementContent');
      
        
        const renderProperties = (obj) => {
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              const value = obj[key];
      
              if (typeof value === 'string') {
                const elementContentItem = document.createElement('div');
                elementContentItem.classList.add('elementContentItem');
      
                const keyHeading = document.createElement('h4');
                keyHeading.textContent = `${key}:`;
      
                const valueContent = document.createElement('p');
                valueContent.textContent = value;
      
                elementContentItem.appendChild(keyHeading);
                elementContentItem.appendChild(valueContent);
                elementContent.appendChild(elementContentItem);
              } else if (typeof value === 'object') {
                renderProperties(value); 
              }
            }
          }
        };
      
        renderProperties(data); 
      
        elementHeader.appendChild(editButton);
        elementHeader.appendChild(deleteButton);
      
        tablaElement.appendChild(elementHeader);
        tablaElement.appendChild(elementContent);
      
        table.appendChild(tablaElement);
      }
}

customElements.define('tabla-component',Tabla);
