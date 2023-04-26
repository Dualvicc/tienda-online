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
        }
        .faqsHeader{
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
        .headerSubtitle p{
            font-size: 1.2rem;
            font-weight: 300;
            line-height: 30px;
        }
        .faqsFaq{
            width: 70%;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding-bottom: 5%;
        }
        .faqElement{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .faqElementTitle{
            text-align: left;
            display: flex;
            justify-content: space-between;
        }
        .faqElementTitle h4{
            font-weight: 600;
            font-size: 1.2rem;
            color:hsl(0, 0%, 0%);
        }
        .faqElementTitleIcon{
            width: 1rem;
            height: 1rem;
            justify-content: end;
            position: relative;
        }
        .faqElementTitleIcon::after{
            content: "";
            width: 100%;
            height: 2px;
            background-color: hsl(0, 0%, 0%);
            position: absolute;
            top: 45%;
        
        }
        .faqElementTitleIcon::before{
            content: "";
            width: 100%;
            height: 2px;
            background-color: hsl(0, 0%, 0%);
            position: absolute;
            top: 45%;
            transform: rotate(90deg);
            transition: 0.3s;
        }
        .faqElementTitleIcon.active::before{
            content: "";
            width: 100%;
            height: 2px;
            background-color: hsl(0, 0%, 0%);
            position: absolute;
            top: 45%;
            transform: rotate(0deg);
        }
        .faqElementTitle::after{
            content: '';
            position: absolute;
            background-color: hsl(0, 12%, 93%);
            width: 70%;
            height: 1px;
            margin-top: 2rem;
        }
        .faqElementAnswer{
            text-align: left;
            display: none;
        }
        .faqElementAnswer p{
            font-size: 1rem;
            font-weight: 300;
            line-height: 30px;
        }
        .faqElementAnswer.active{
            display: block;
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
            <div class="faqsFaq">
                <div class="faqElement">
                    <div class="faqElementTitle">
                        <h4>How do I order?</h4>
                        <div class="faqElementTitleIcon">
                        </div>  
                    </div>
                    <div class="faqElementAnswer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis alias dolor aliquam harum repudiandae quibusdam nobis recusandae necessitatibus. At totam, excepturi quae culpa molestiae odit possimus quo debitis ipsa aliquam!</p>
                    </div>
                </div>
                <div class="faqElement">
                    <div class="faqElementTitle">
                        <h4>How can I make the payment?</h4>
                        <div class="faqElementTitleIcon">
                        </div>  
                    </div>
                    <div class="faqElementAnswer">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laboriosam eligendi rem placeat, assumenda praesentium facere labore? Animi soluta obcaecati ut laborum quae aspernatur iure consequuntur distinctio cumque, ullam incidunt?</p>
                    </div>
                </div>
                <div class="faqElement">
                    <div class="faqElementTitle">
                        <h4>How much time does it take to receive the order?</h4>
                        <div class="faqElementTitleIcon">
                        </div>   
                            
                    </div>
                    <div class="faqElementAnswer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nihil sunt, ea voluptatum culpa in. Dolorum alias qui minus quibusdam excepturi quas est omnis laborum ducimus vitae. Iste, expedita harum.</p>
                    </div>
                </div>
                <div class="faqElement">
                    <div class="faqElementTitle">
                        <h4>Can I resell the products?</h4>
                        <div class="faqElementTitleIcon">   
                        </div>  
                    </div>
                    <div class="faqElementAnswer">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id officia quidem inventore voluptatibus mollitia quaerat quibusdam repellat tempora obcaecati similique consectetur ea omnis qui tempore, porro saepe. Quisquam, laboriosam repudiandae!</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('faqs-component', Faqs);