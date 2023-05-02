class Faqs extends HTMLElement {

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
            color: hsl(210, 7%, 59%);
            scroll-behavior: smooth;
        }
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
        }
        .faqs{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:hsl(0, 9%, 96%);
            justify-content: space-between;
        }
        .faqsHeader{
            border: 2px solid red;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-bottom: 4rem;
        }
        .headerTitle{
            text-align: center;
        }
        .headerTitle h2{
            color: hsl(0, 0%, 24%);
            font-size: 3rem;
            font-weight: 600;
        }
        .headerSubtitle{
            width: 60%;
            text-align: center;
        }
        div{
            width: 100%;
        }
        .headerSubtitle p{
            font-size: 1.2rem;
            font-weight: 300;
            line-height: 30px;
        }
        </style>
        <section class="faqs">
            <div class="faqsHeader">
                <div class="headerTitle">
                    <h2>FAQs</h2>
                </div>
                <div class="headerSubtitle">
                    <p>Got questions? We’ve got answers. If you have some other questions, feel free to send us an email to</p>
                </div>
            </div>
            <slot name="faqs"></slot>
            

        </section>
        `;
    }
}

customElements.define('faqs-component', Faqs);