document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

function validateForm() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    sendToWhatsApp();
    window.location.href = "thanks.html";
    return false;
}
function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;

    const message = `*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Query:* ${query}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=9125403859&text=${message}`;

    window.open(whatsappURL, '_blank');
}