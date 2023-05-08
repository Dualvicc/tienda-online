(()=>{var n={46:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .main{\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n        }\n        .tabla{\n            width:30%;\n        }\n        .form{\n            width: 65%;\n        }\n        </style>\n        <div class="main">\n            <div class="tabla">\n                <slot name="tabla"></slot>\n            </div>\n            <div class="form">\n                <slot name="form"></slot>\n            </div>\n        </div>\n        '}}customElements.define("content-component",n)},444:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .area{\n            width: 100%;\n            height: 100%;\n        }\n        .bar{\n            width: 100%;\n            height: 3rem;\n            background-color: white;\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 2.5rem;\n        }\n        .tabs{\n            display:flex;\n            width: 25%;\n            height: 100%;\n            justify-content: center;\n            align-items: center;\n        }\n        .tab{\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content:center;\n            align-items: center;\n        }\n        .tab.active{\n            background-color: hsl(207, 85%, 69%);\n        }\n        .tab:hover{\n            background-color: grey;\n            opacity: 0.5;\n        }\n        .tab:hover h3{\n            color: white;\n        }\n        .tab.active h3{\n            color: white;\n            font-size: 1.2rem;\n        }\n        .tab{\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content:center;\n            align-items: center;\n        }\n        .tab h3{\n            color: grey;\n            font-size: 1.2rem;\n        }\n        .barButtons{\n            display: flex;\n            margin-right: 0.8rem;\n        }\n        .cleanButton{\n        }\n        .cleanButton:hover svg{\n            filter: none;\n        }\n        .saveButton:hover svg{\n            filter: none;\n        }\n        svg{\n            object-fit: contain;\n            height: 100%;\n            width: 100%;\n            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);\n        }\n        .register{\n            width: 100%;\n            flex-direction: column;\n            justify-content: space-between;\n            height: 60%;\n            display: none;\n        }\n        .register.active{\n            display: flex;\n        }\n        .row{\n            display:flex;\n            width: 100%;\n            height: 45%;\n            gap: 2rem;\n            justify-content: space-between;\n        }\n        .formInput{\n            width: 48%;\n            display: flex;\n            height: 100%;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        .input{\n            height: 2rem;\n        }\n        input:focus {\n            outline: none;\n        }\n        .input input{\n            width: 100%;\n            height: 100%;\n            background-color: hsl(226, 64%, 66%);\n            border: none;\n            border-bottom: 1px solid white;\n            color: white;\n        }\n        .label{\n            color: white;\n            font-weight: bold;\n        }\n        .tabContent{\n            display:none;\n        }\n        .tabContent.active{\n            display:flex;\n        }\n\n        </style>\n        <div class="area">\n            <div class="bar">\n                <div class="tabs">\n                    <div class="tab active" data-tab="principal">\n                        <h3>Principal</h3>\n                    </div>\n                    <div class="tab" data-tab="upload">\n                        <h3>Imágenes</h3>\n                    </div>\n                </div>\n                <div class="barButtons">\n                    <div class="cleanButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>\n                    </div>\n                    <div class="saveButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>\n                    </div>\n                </div>\n            </div>\n            <div class="register form tabContent active" data-tab="principal">\n                <div class="row">\n                    <div class="formInput">\n                        <div class="label">Nombre</div>\n                        <div class="input">\n                            <input class="nameInput" type="text"  required>\n                        </div>\n                    </div>\n                    <div class="formInput">\n                        <div class="label">Email</div>\n                        <div class="input">\n                            <input class="emailInput" type="text"  required>\n                        </div>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="formInput">\n                        <div class="label">Contraseña\n                        </div>\n                        <div class="input">\n                            <input class="passwordInput" type="text" required>\n                        </div>\n                    </div>\n                    <div class="formInput">\n                        <div class="label">Confirme contraseña</div>\n                        <div class="input">\n                            <input class ="confirmPasswordInput" type="text" required>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="tabContent imageUpload" data-tab="upload">\n                <input type="file" class="">\n            </div>\n        </div>\n        ';const n=this.shadow.querySelector(".nameInput"),e=this.shadow.querySelector(".emailInput"),t=this.shadow.querySelector(".passwordInput"),i=this.shadow.querySelector(".confirmPasswordInput");document.addEventListener("editTable",(t=>{n.value=t.detail.name,e.value=t.detail.email})),this.shadow.querySelector(".cleanButton").addEventListener("click",(()=>{n.value="",e.value="",t.value="",i.value=""}));const s=this.shadow.querySelectorAll(".tab"),o=this.shadow.querySelectorAll(".tabContent");s.forEach((n=>{n.addEventListener("click",(()=>{const e=n.dataset.tab;s.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),o.forEach((n=>{n.classList.contains("active")&&n.classList.remove("active"),n.dataset.tab===e&&n.classList.add("active")}))}))}))}}customElements.define("form-component",n)},831:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .header{\n            display: flex;\n            justify-content: space-between;\n            width: 100%;\n            height: 10vh;\n            margin-bottom: 2rem;\n        }\n        .headerLogo{\n            width: 10%;\n            display: flex;\n            justify-content: left;\n            align-items: center;\n        }\n        h2{\n            color:white;\n            font-size: 3rem;\n        }\n        .headerTitle{\n            width: 15%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n        }\n        .headerMenu{\n            width: 10%;\n            display: flex;\n            justify-content: flex-end;\n        }\n        .hamburgerButton {\n            cursor: pointer;\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            gap: 0.8rem;\n            justify-content: center;\n            right: 0;\n            transition: all 0.3s ease-in-out;\n            width:50%;\n        }\n          \n        .hamburgerButton span {\n            background-color: #fff;\n            display: block;\n            transition: all 0.3s ease-in-out;\n            width: 100%;\n            height: 4px;\n        }\n        \n        .hamburgerButton.active{\n            position: relative;\n        }\n        \n        .hamburgerButton.active span:first-of-type {\n            transform: translateY(26px) rotate(45deg);\n        }\n          \n        .hamburgerButton.active span:nth-of-type(2) {\n            opacity: 0;\n        }   \n          \n        .hamburgerButton.active span:last-of-type {\n            transform: translateY(-5px) rotate(-45deg);\n        }\n        \n        </style>\n            <div class="header" id="header">\n                <div class="headerLogo">\n                    <h2>Detectib</h2>\n                </div>\n                <div class="headerTitle">\n                    <h2>Clientes</h2>\n                </div>\n                <div class="headerMenu">\n                    <div class="hamburgerButton">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                </div>\n            </div>\n        ';const n=this.shadow.querySelector(".hamburgerButton");n.addEventListener("click",(()=>{n.classList.toggle("active"),n.parentElement.classList.toggle("active"),n.querySelectorAll("svg").forEach((n=>{n.classList.toggle("active")}))}))}}customElements.define("header-component",n)},359:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .main{\n            width: 100%;\n        }\n        </style>\n        <section class="main">\n            <slot name="tabla"></slot>\n            <slot name="form"></slot>\n        </section>\n        '}}customElements.define("main-component",n)},716:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .searchbar{\n            width: 100%;\n            display: flex;\n            background-color: white;\n            height: 3rem;\n            justify-content: center;\n            align-items: center;\n            margin-bottom: 3rem;\n        }\n        .filter{\n            width: 2rem;\n            height: 80%;\n        }\n        .filter svg{\n            object-fit: contain;\n            height: 100%;\n            width: 100%;\n            filter: invert(0.6) sepia(1) saturate(7) hue-rotate(175deg);\n        }\n        </style>\n        <div class="searchbar">\n            <div class="filter">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>\n            </div>\n        </div>\n        '}}customElements.define("searchbar-component",n)},375:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .tabla{\n            display: flex;\n            flex-direction: column;\n            gap: 1.5rem;\n            width: 100%;\n            \n            margin: 0;\n        }\n        .tablaElement{\n            height: 12vh;\n            display: flex;\n            flex-direction: column;\n        }\n        .elementHeader{\n            width: 100%;\n            height: 40%;\n            background-color: hsl(207, 85%, 69%);\n            display: flex;\n            justify-content: end;\n        }\n        .editButton{\n            height: 100%;\n            width: 2.5rem;\n            transition: 0.5s;\n        }\n        .editButton:hover svg{\n            filter: none;\n        }\n        svg{\n            object-fit: contain;\n            height: 100%;\n            width: 100%;\n            filter: invert(1) sepia(1) saturate(7) hue-rotate(175deg);\n        }\n        .deleteButton{\n            height: 100%;\n            width: 2.5rem;\n        }\n        .deleteButton:hover svg{\n            filter:none;\n        }\n        .elementContent{\n            width: 100%;\n            height: 60%;\n            background-color: hsl(226, 64%, 66%);\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            gap: 0.5rem;\n        }\n        .elementContentEmail{\n            display: flex;\n            gap: 0.5em;\n            color:white;\n        }\n        .elementContentUser{\n            display: flex;\n            gap: 0.5em;\n            color:white;\n        }\n        </style>\n        <div class="tabla">\n            <div class="tablaElement">\n                <div class="elementHeader">\n                    <div class="editButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>\n                    </div>\n                    <div class="deleteButton modalButton">\n                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>\n                    </div>\n                </div>\n                <div class="elementContent">\n                    <div class="elementContentEmail">\n                        <h4> Email : </h4>\n                        <p>perico_moreno@gmail.com</p>\n                    </div>\n                    <div class="elementContentUser">\n                        <h4> User : </h4>\n                        <p> JoseLuis </p>\n                    </div>\n                </div>\n            </div>\n            <div class="tablaElement">\n                <div class="elementHeader">\n                    <div class="editButton">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>\n\n                    </div>\n                    <div class="deleteButton modalButton">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>\n                    </div>\n                </div>\n                <div class="elementContent">\n                    <div class="elementContentEmail">\n                        <h4> Email : </h4>\n                        <p>su_rubio@gmail.com</p>\n                    </div>\n                    <div class="elementContentUser">\n                        <h4> User : </h4>\n                        <p> JoseLuis </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ';const n=new CustomEvent("openModal");this.shadowRoot.querySelectorAll(".modalButton").forEach((e=>{e.addEventListener("click",(()=>{document.dispatchEvent(n)}))})),this.shadow.querySelectorAll(".editButton").forEach((n=>{n.addEventListener("click",(()=>{console.log(n);const e=n.closest(".tablaElement").querySelector(".elementContentUser").querySelector("p").innerHTML,t=n.closest(".tablaElement").querySelector(".elementContentEmail").querySelector("p").innerHTML;document.dispatchEvent(new CustomEvent("editTable",{detail:{name:e,email:t}}))}))}))}}customElements.define("tabla-component",n)},280:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=this.attributes.getNamedItem("width").value,e=this.attributes.getNamedItem("height").value;this.render(n,e)}render(n,e){this.shadow.innerHTML=`\n        <style>\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: "Poppins", sans-serif;\n            text-decoration: none;\n            color: hsl(210, 7%, 59%);\n            scroll-behavior: smooth;\n        }\n        html {\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n        }\n        .modal{\n            display: none;\n            width: 100%;\n            height: 100vh;\n            position: fixed;\n            bottom: 0;\n        }\n        .modal.active{\n            display:flex;\n            z-index: 1;\n            position: fixed;\n            top:0;\n            left: 0;\n            bottom: 0;\n            right: 0;\n        }\n        .modalBackground{\n            backdrop-filter: blur(2px);\n            height: 100vh;\n            z-index: 999;\n            transition: all 0.2s ease-in-out;\n            width: 100%;\n            position: absolute;\n        }\n        \n        .modal.active{\n            opacity: 1;\n            z-index: 2000;\n        }\n        .modalCard{\n            position: absolute;\n            background-color: hsl(0, 0%, 100%);\n            width: ${n};\n            z-index: 1000;\n            height: ${e};\n            margin: auto;\n            position: absolute;\n            top: 0; left: 0; bottom: 0; right: 0;\n            overflow: hidden; \n\n        }\n        .modalCard .closeButton{\n            position: absolute;\n            top: 0;\n            right: 0;\n            cursor: pointer;\n            padding: 0.5rem;\n            z-index: 2000;\n        }\n        .modalCard .closeButton button{\n            border: none;\n            background: none;\n            cursor: pointer;\n            font-size: 1.5rem;\n            color: hsl(0, 0%, 50%);\n            transition: 0.5s;\n        }\n        .closeButton button:hover{\n            color: hsl(0, 0%, 0%);\n        }\n        </style>\n        <div class="modal" id="modal">\n            <div class="modalBackground modalButton">\n            </div>\n            <div class="modalCard">\n                <div class="closeButton modalButton">\n                    <button>x</button>\n                </div>\n                <slot name="composition"></slot>\n            </div>\n        </div>\n        `;const t=this.shadow.querySelectorAll(".modalButton"),i=this.shadow.querySelector("#modal");t.forEach((n=>{n.addEventListener("click",(()=>{i.classList.toggle("active")}))})),document.addEventListener("openModal",(()=>{i.classList.toggle("active")}))}}customElements.define("modal-component",n)}},e={};function t(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";t(831),t(716),t(359),t(375),t(444),t(46),t(280)})()})();