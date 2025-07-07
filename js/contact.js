document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    // Initialize EmailJS
    (function(){
        emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS User ID
    })();

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        // Reset errors
        clearErrors();

        // Validation
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Name is required.');
        }
        if (email.value.trim() === '') {
            isValid = false;
            showError(email, 'Email is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            isValid = false;
            showError(email, 'Please enter a valid email address.');
        }
        if (message.value.trim() === '') {
            isValid = false;
            showError(message, 'Message is required.');
        }

        if (isValid) {
            const submitButton = contactForm.querySelector('.btn-launch');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            const templateParams = {
                title: 'New Contact Form Submission',
                from_name: name.value,
                from_email: email.value,
                message: message.value,
                time: new Date().toLocaleString(),
            };

            emailjs.send('service_x2xr1n9', 'template_t5usnf6', templateParams, 'uCh9hIM3QbGJ0GZnA')
                .then(function(response) {
                    showFormMessage('Message sent successfully!', 'success');
                    contactForm.reset();
                }, function(error) {
                    showFormMessage('Failed to send message. Please try again later.', 'error');
                })
                .finally(function() {
                    submitButton.textContent = 'Transmit Message';
                    submitButton.disabled = false;
                });
        }
    });

    function showError(input, message) {
        input.classList.add('error');
        let errorMessage = input.parentElement.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            input.parentElement.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function clearErrors() {
        const errorInputs = contactForm.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));

        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        const formMessage = document.getElementById('form-message');
        if (formMessage) {
            formMessage.remove();
        }
    }

    function showFormMessage(message, type) {
        let formMessage = document.getElementById('form-message');
        if (!formMessage) {
            formMessage = document.createElement('div');
            formMessage.id = 'form-message';
            contactForm.appendChild(formMessage);
        }
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    }
});