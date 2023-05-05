class ProductForm extends HTMLElement {

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
        .productForm{
            display: flex;
            left: 50%;
            flex-direction: column;
            width: 50%;
            height: 100%;
            justify-content: space-evenly;
            align-items: center;
            padding: 0 1rem;
            position: absolute;
        }
        .formGobackbutton{
            width: 25%;
        }
        .formGobackbutton button{
            width: 100%;
            border: 1px solid hsl(0, 9%, 96%);
            border-radius: 50px;
            background-color: hsl(0, 0%, 100%);
            padding: 0.5rem 0;
            transition: 0.5s;
        }
        .formGobackbutton button:hover{ 
            background-color: hsl(204, 15%, 26%);
            color: hsl(0, 0%, 100%);
        }
        .formUserName{
            width:100%;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        
        .formUserEmail{
            display: flex;
            flex-direction: column;
        }
        .inputLimit{
            text-align: end;
        }
        .productForm input{
            padding: 1rem 0.5rem;
            text-align: left;
            width: 100%;
            background-color: hsl(204, 56%, 98%);
            border: 1px solid hsl(0, 9%, 96%);
            color: hsl(0, 0%, 75%);
        }
        .productForm input::placeholder{
            color: hsl(0, 0%, 75%);
        }
        .productForm div:has(input){
            width: 90%;
        }
        .invalid input{
            border: 1px solid red;
        }
        .formUserArea{
            width:100%;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        .errorMessage{
            color: red;
            font-size: 0.8rem;
        }
        .payButton{
            width: 90%;
        }
        .payButton button{
            background-color: hsl(209, 100%, 50%);
            border: none;
            color: white;
            width: 100%;
            padding: 1.5rem 0;
            font-size: 1.5rem;
            font-weight: 500;
            transition: all 0.5s linear;
            margin-bottom: 2rem;
        
        }
        .payButton button:hover{  
            background-color: hsl(204, 15%, 26%);
        }
        </style>
        <form action=""class= "productForm">
            <div class="formGobackbutton swipeButton">
                <button type="button">Go back</button>
            </div>
            <div class="formUserName">
                <div class="firstName">
                    <input type="text" placeholder="First name" data-validate="onlyletters">
                </div>
                <div class="lastName">
                    <input type="text" placeholder="Last name" data-validate="onlyletters">
                </div>
            </div>
            <div class="formUserEmail">
                <div class="inputLimit">
                </div>
                <input type="text" name="" id="" maxlength="20" class="inputLimited" placeholder="E-mail adress" data-validate="email">
            </div>
            <div class="formUserAddress1">
                <div class="inputLimit"></div>
                <input type="text" name="" id="" maxlength="40" class="inputLimited" placeholder="Address Line 1">
            </div>
            <div class="formUserTelephone">
                <div class="inputLimit"></div>
                <input type="number" name="" id="" maxlength="20" class="inputLimited" placeholder="Phone number" data-validate="telephone">
            </div>
            <div class="formUserArea">
                <div class="state">
                    <div class="inputLimit"></div>
                    <input type="text" name="" id="" maxlength="20" class="inputLimited" placeholder="Pais">
                </div>
                <div class="zipCode">
                    <div class="inputLimit"></div>
                    <input type="number" name="" id="" maxlength="20" class="inputLimited" placeholder="Codigo Postal" data-validate="onlynumbers">
                </div>
            </div>
            <div class="formCountryoption">

            </div>
            <div class="payButton">
                <button>FINNISH PURCHASE</button>
            </div>
        </form> 
        `;
    }
}

customElements.define('form-component', ProductForm);