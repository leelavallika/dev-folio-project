const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;
    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    const emailPattern = /.+@.+\..+/;
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email';
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent =
            'Message must contain at least 10 characters';

        isValid = false;
    }

    if (isValid) {

        console.log('Form submitted successfully!');

        alert('Form submitted successfully!');

        form.reset();
    }

});