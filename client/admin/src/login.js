import { API_URL } from '../config/config.js'
class Login extends HTMLElement {

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
          .login-container {
            width: 70%;
            background-color: #fff;
            padding: 3%;
            position: relative;
            top: 50%;
            left: 15%;
            right: 15%;
            border-radius: 30px;
          }
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          
          label {
            font-weight: bold;
            gap: 0.5rem;
          }
          
          input[type="email"],
          input[type="password"],
          input[type="submit"] {
            padding: 2%;
            border: 1px solid #ccc;
            width: 100%;
            box-sizing: border-box;
          }
          
          input[type="submit"] {
            background-color: #4CAF50;
            color: #fff;
            border: none;
            cursor: pointer;
          }
          
        </style>
        <div class="login-container">
            <form>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <input type="submit" value="Iniciar sesión">
                </div>
            </form>
        </div>
        `;
        const submit = this.shadow.querySelector('input[type=submit]');
        submit.addEventListener('click',(e)=>{

            e.preventDefault();

            const form = this.shadow.querySelector('form');

            const formData = new FormData(form);

            const formDataToJson = (formData) => {
                const json = Object.fromEntries([...formData]);
                return JSON.stringify(json);
            };

            const json = formDataToJson(formData);
            const url = `${API_URL}/api/auth/users/signin`;

            fetch(url, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: json
            }).then(response => {
                if (response.ok) {
                  console.log('Inicio de sesión exitoso');
                  return response.json();
                } else {
                  console.log('Error en el inicio de sesión');
                }
            }).then(data => {
                sessionStorage.setItem("bearerToken", `${data.accessToken}`)
                if(sessionStorage.getItem("bearerToken")) {
                window.location.href = './admin.html'
                }
            }).catch(error => {
                console.error('Error en la petición:', error);
            });
            
              
        });
    }
}

customElements.define('login-component',Login);
