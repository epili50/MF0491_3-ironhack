/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const enviar = document.querySelector('#btn-send');

enviar.addEventListener('click', () =>{
    const mensaje = document.querySelector('#message');

    
    document.querySelector('#last-message').textContent = mensaje.value;

    mensaje.value = '';

})