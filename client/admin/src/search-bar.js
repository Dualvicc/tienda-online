import { API_URL } from '../config/config.js'
class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data= [];
        this.render();
    }

    async connectedCallback () {
        document.addEventListener('dataFilters', (event) => {
            this.data = event.detail;
            this.render();
        })
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
        form {
            max-height: 70vh;
            display: flex;
            justify-content: space-between;

        }
        .searchbar{
            width: 100%;
            display: flex;
            background-color: white;
            height: 3rem;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;
        }
        label {
            color: white;
            font-weight: bold;
        }
        input {
            default: none;
            width: 100%;
            height: 2rem;
            margin-bottom: 2rem;
        }
        input:focus {
            outline: none;
        }
        .filter{
            width: 2.5rem;
            height: 100%;
        }
        .filter svg{
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);
        }
        </style>
        <form>
        </form>
        <div class="searchbar">
            <div class="filter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
            </div>
        </div>
        
        `;
        const filterButton = this.shadow.querySelector('.filter');
        filterButton.addEventListener('click', () => {
            filterButton.classList.toggle('active');
            filterButton.classList.contains("active") ?
            this.renderFilters() 
            : (this.filterData() , this.unrenderFilters());
        })
        
    }
    renderFilters() {
        const form = this.shadow.querySelector('form');
      
        this.data.forEach(key => {
          const filterInput = document.createElement('input');
          filterInput.type = 'text';
          filterInput.placeholder = `filter by ${key}`;
          filterInput.name = key;
      
          const label = document.createElement('label');
          label.innerText = key.toUpperCase();
          label.appendChild(filterInput);
      
          form.appendChild(label);
        });
    }
    unrenderFilters() {
        const form = this.shadow.querySelector('form');
        while (form.firstChild) {
          form.firstChild.remove();
        }
    }
    async filterData(){
        const form = this.shadow.querySelector('form');
        const jsonObject = Object.fromEntries(new FormData(form));

        const params = new URLSearchParams()

        for(const key in jsonObject){
            jsonObject[key] === '' ? delete jsonObject[key] : params.append(key, jsonObject[key]);
        }
        let url =  `${API_URL}/api${this.getAttribute('url')}` + `?${params.toString()}` ;
        
        await fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        })
        .then(data => {
            document.dispatchEvent(new CustomEvent('filterData', { 
                detail: { 
                    data: data 
                } 
            }));
        })
        .catch(error => {
            console.error('Error en la petición:', error);
        });
    }

}

customElements.define('searchbar-component',SearchBar);
