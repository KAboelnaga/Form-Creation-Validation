document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (event) =>{
        console.log('Form submitted');
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();

        let messages = [];

        const feedbackDiv = document.getElementById('form-feedback');

        let isValid = true;
        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
        }
        if (password.length < 8) {
            messages.push(' Password must be at least 8 characters long.');
            isValid = false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            messages.push(' Email must be a valid email address.');
            isValid = false;
        }
        if (isValid) {
            messages.push('Registration successful!');
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.style.color = '#dc3545';
        }
        feedbackDiv.innerHTML = messages.join('</br>');
    });
});