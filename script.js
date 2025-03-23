document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const message = `¡Gracias, ${name}! Hemos recibido tu confirmación para ${guests} invitado(s).`;
    document.getElementById('confirmation-message').innerText = message;
    document.getElementById('rsvp-form').reset();
});
