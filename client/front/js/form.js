export default (() => {
    const sendButton = document.querySelector(".payButton");

    sendButton.addEventListener("click", event => {
        event.preventDefault();
        const form = sendButton.closest("form");
        valid(form);
    });
      
})();

function valid (form){
    let valid =  true;
    

    let validators = {
            onlyletters: {
                regex :/^[a-zA-Z\s]+$/g,
                message : "Solo letras"
            },
            onlynumbers: {
                regex : /\d/g,
                message: "Solo numeros"    
            },
            telephone: {
                regex : /^\d{9}$/g,
                message: "No es un numero valido"
            },
            email: {
                regex : /\w+@\w+\.\w+/g,
                message: "No es un correo valido"
            },
            web:{
                regex: /^(http|https):\/\/\w+\.\w+/g,
                message: "No es una direccion valida"
            },
            password: {
                regex : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
                message : "La contraseña debe incluir"
            },
            date: {
                regex : /^\d{4}-\d{2}-\d{2}$/g,
                message : "El formato debe ser: 2000/05/15"
            },
            time: {
                regex : /^\d{2}:\d{2}$/g,
                message : "El formato debe ser: 16:45"
            }
    }
    
    for(let i = 0; i < form.elements.length; i++) {

        if(form.elements[i].dataset.validate) {

            if(form.elements[i].value.match(validators[form.elements[i].dataset.validate]) == null) {
                valid = false;
                form.elements[i].parentNode.classList.add('invalid');
                
                let error = document.createElement('span'); 
                error.classList.add("errorMessage");
                error.textContent = validators[form.elements[i].dataset.validate].message;
                if(document.querySelectorAll('.errorMessage')){
                    form.elements[i].closest('div').appendChild(error);
                }
            }else{

                form.elements[i].parentNode.classList.remove('invalid');
            }
        }
    }
    if(!valid){
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Los datos del formulario no son válidos',
                type: 'error'
            }
        }));
    }else{
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Formulario rellenado correctamente',
                type: 'ok'
            }
        }));

    }
   


    return valid;
};