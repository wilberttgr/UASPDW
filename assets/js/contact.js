(function () {
    // Add your EmailJS User ID and Template ID below
    emailjs.init("b6ehdzdKUkgV38al9");

    // Form submission event listener
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Show loading message
        var loadingMessage = document.querySelector(".loading");
        loadingMessage.style.display = "block";

        // Send email
        emailjs.sendForm("service_6qiytlg", "template_7qg6y9n", this)
            .then(function () {
                // Hide loading message and show success message
                loadingMessage.style.display = "none";
                showSuccessMessage();
            })
            .catch(function (error) {
                // Hide loading message and show error message
                loadingMessage.style.display = "none";
                showError(error);
            });
    });

    // Function to show success message
    function showSuccessMessage() {
        var successMessage = document.querySelector(".sent-message");
        successMessage.style.display = "block";
        successMessage.style.backgroundColor = "#ffb03b";
        successMessage.innerHTML = 'Your message has been sent. Thank you!';
        successMessage.classList.add('sent-notification');
    }

    // Function to show error message
    function showError(error) {
        var errorMessage = document.querySelector(".error-message");
        errorMessage.innerText = "An error occurred while sending the message. Please try again later.";
        errorMessage.style.display = "block";
    }
})();

document.querySelector('.sent-message').innerHTML = 'Your message has been sent. Thank you!';
