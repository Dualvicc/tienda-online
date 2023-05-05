class Contact extends HTMLElement {

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
        .contact{
            height:60vh;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .contactMap{
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }
        </style>
        <section class="contact" id="contact">
            <div class="contactMap">
                <iframe width= '100%' height='100%' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=2.6228088140487675%2C39.56824947394448%2C2.6317673921585083%2C39.57176021177181&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/39.57000/2.62729"></a></small>
            </div>
            <slot name="flipCard"></slot>
    </section>
        `;
    }
}

customElements.define('contact-component', Contact);