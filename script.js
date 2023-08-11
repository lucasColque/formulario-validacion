    const nodoInput = document.querySelectorAll('.validate');
    const form = document.querySelector('form');
    const error = document.querySelectorAll('.error_message');
    const select = document.querySelector('select');
    const error_section = document.querySelector('.error_message_section');

    const getMensaje = () =>{
                const http = new XMLHttpRequest();
                http.onreadystatechange = ()=>{
                    if(http.readyState == 4 && http.status == 200){
                        let container = document.getElementById('error_mensaje_ajax')
                        container.innerHTML = http.responseText;
                        container.classList.add('ajax-response');
                    }
                }
                http.open('GET','http://localhost/formulario_validacion/gracias.txt',true);
                http.send();
            }


    form.addEventListener('submit',(e)=>{
        let isValid = true;
//Validar si los campos estan completados, caso contrario agregar un comentario
        for (let i = 0; i < nodoInput.length; i++) {
            if(nodoInput[i].value === ''){
                e.preventDefault();
                console.log('hola');
                error[i].textContent = '* Campo obligatorio';
                error[i].classList.add('required');
                isValid = false;
            }else{
                error[i].textContent = '';
            }
            
        }
        if(select.value !== 'contacto' && select.value !== 'soporte'){
            e.preventDefault();
            console.log(select.value);
            error_section.textContent = '* Campo obligatorio';
            error_section.classList.add('required');
            isValid = false;
        }else{
            error_section.textContent = '';
        }
        if(isValid){
            e.preventDefault();
            getMensaje();
        }
    })
