async function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Servisios EmailJS
    const serviceID = 'service_qtnb1aq';
    const templateID = 'template_uyksvpl';
    const userID = 'D4ILizNNnYQCGVQpK';

    const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: {
            nombre,
            email,
            mensaje
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('¡Mensaje enviado correctamente!');
        } else {
            alert('Error al enviar el mensaje.');
        }
    } catch (error) {
        alert('Error de conexión.');
    }
}
document.getElementById('miFormulario').addEventListener('submit', enviarFormulario);