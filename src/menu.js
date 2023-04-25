class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .headerNav ul{
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            list-style: none;
        }
        .headerNav ul li a {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .headerNav ul li a:hover{
            opacity: 0.9;
            color: hsl(0, 0%, 0%);
        }
        a, td, th, p, button, span, label, select, input, textarea, li {
            font-family: "Poppins", sans-serif;
        }
        h1, h2, h3, h4, h5, h6, a, p {
            /* color: hsl(0, 0%, 100%); */
        }
        a {
            background-color: transparent;
        }
        
        h1, h2, h3, h4, h5, h6, p, a {
            margin: 0;
        }
        * {
            margin: 0;
            box-sizing: border-box;
            text-decoration: none;
            color: hsl(210, 7%, 59%);
            scroll-behavior: smooth;
        }
        user agent stylesheet
        a:-webkit-any-link {
            color: -webkit-link;
            cursor: pointer;
            text-decoration: underline;
        }
        </style>
        <div class="headerNav">
            <ul>
                <li>
                    <a href="#header">Home</a>
                </li>
                <li>
                    <a href="#product">Product</a>
                </li>
                <li>
                    <a href="#featured">Features</a>
                </li>
                <li>
                    <a href="#details">Details</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#social">Social</a>
                </li>
            </ul>
        </div>      
        `;
    }
}

customElements.define('menu-component', Menu);