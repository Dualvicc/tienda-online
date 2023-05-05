class Notification extends HTMLElement {

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
        .notification{
            position: fixed;
            display:none;
            bottom: 5%;
            right: 5%;
            background-color:  hsl(0, 0%, 100%);
            z-index: 5000;
            width: 15%;
            height: 20vh;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .notification.active{
            display: flex;
        }
        .notification.error{
            background-color: hsl(18, 100%, 57%);
            opacity: 0.9;
        }
        .notification.ok{
            background-color: hsl(209, 100%, 50%);
            opacity: 0.9;
        }
        .notification.discard{
            background-color: hsl(18, 100%, 57%);
            opacity: 0.9;
        }
        .notification.add{
            background-color: hsl(209, 100%, 50%);
            opacity: 0.9;
        }
        .notificationTitle{
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .notificationTitle h4{
            color: white;
        }
        .notificationProduct{
            height: 35%;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.5rem;
            color: white;
        }
        .notificationProduct p{
            color: white;
            
        }        
        </style>
        <div class="notification" id="notification">
            <div class="notificationTitle">
                <h4></h4>
            </div>
            <div class="notificationProduct">
            
            </div>
            <div class="notificationAmount">

            </div>
            <div class="notificationCheckoutbutton">

            </div>
            <div class="notificationExitbutton">

            </div>
        </div>
        `;
    }
}

customElements.define('notification-component', Notification);