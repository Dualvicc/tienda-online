class Pagination extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render ();
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
            bottom: 10%;
            
        }
        .element{
            width: 10%;
            background-color: hsl(226, 64%, 66%);
            display: flex;
            justify-content: center;
            height: 100%;
        }
        .element a {
            align-items: center;
            margin: auto;
        }
        a{
            color: white;
        }
        
        </style>
        <div class="pagination">
            <div class="element">
                <a > 1 </a>
            </div>
            <div class="element">
                <a > < </a>
            </div>
            <div class="element">
                <a > > </a>
            </div>
            <div class="element">
                <a > >> </a>
            </div>  
        </div>
        `;
    }
}

customElements.define('pagination-component', Pagination);
