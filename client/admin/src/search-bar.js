class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
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
        .searchbar{
            width: 100%;
            display: flex;
            background-color: white;
            height: 3rem;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;
        }
        .filter{
            width: 2rem;
            height: 80%;
        }
        .filter svg{
            object-fit: contain;
            height: 100%;
            width: 100%;
            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);
        }
        </style>
        <div class="searchbar">
            <div class="filter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
            </div>
        </div>
        `;
    }
}

customElements.define('searchbar-component',SearchBar);
