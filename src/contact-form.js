class ContactForm extends HTMLElement {

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
        .contactCardBack{
            position: absolute;
            width: 100%;
            background-color: hsl(0, 0%, 100%);
            backface-visibility: hidden;
            transform: perspective(1000px) rotateY(-180deg);
            display: flex;
            justify-content: space-around;
            transition: 1s;
            padding-top: 4rem;
        }
        .contactForm{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            width: 80%;
        }
        .contactFormUserdata{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 2rem;
        }
        .userName{
            height: 3rem;
        }
        .userName input{
            padding:0.5rem 1rem;
            width: 100%;
            height: 100%;
        }
        .userEmail{
            height: 3rem;
        }
        .userEmail input{
            padding:0.5rem 1rem;
            width: 100%;
            height: 100%;
        }
        .contactFormSubject{
            height: 3rem;
            width: 100%;
        }
        .contactFormSubject input{
            padding: 0.5rem 1rem;
            width: 100%;
            height: 100%;
        }
        .contactFormMessage{
            width: 100%;
            height: 1000%;
        }
        .contactFormMessage textarea{
            padding: 1.5rem 1rem;
            width: 100%;
            height: 100%;
            text-align: start;
            resize: none;
        }
        .closeButton{
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            padding: 0.5rem;
        }
        .closeButton button{
            border: none;
            background: none;
            cursor: pointer;
            font-size: 1.5rem;
        }
        .messageButton{
            width: 100%;
        }
        .messageButton button{
            background-color: hsl(209, 100%, 50%);
            border: none;
            color: white;
            width: 100%;
            padding: 1.1rem 0;
            font-size: 1.5rem;
            font-weight: 500;
            transition: all 0.5s linear;
            margin-bottom: 2rem;
        
        }
        .messageButton button:hover{  
            background-color: hsl(204, 15%, 26%);
        }
        </style>
        <div class="contactCardBack">
            <div class="contactForm">
                <div class="contactFormUserdata">
                    <div class="userName">
                        <input type="text" class="userName" placeholder="Name">
                    </div>
                    <div class="userEmail">
                        <input type="email" class="userEmail" placeholder="Email adress">
                    </div>
                </div>
                <div class="contactFormSubject">
                    <input type="text" class="formSubject" placeholder="Subject">
                </div>
                <div class="contactFormMessage">
                    <textarea id="message" name="message" placeholder="Message"></textarea>
                </div>
                <div class="messageButton">
                    <button type="button">SEND MESSAGE</button>
                </div>
                <div class="flipButton closeButton">
                    <button>x</button>
                </div>
            </div>
        </div>     
        `;
    }
}

customElements.define('contact-form-component', ContactForm);
