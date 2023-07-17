// Form submission event listener
document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    var formData = new FormData(this); // Create form data object
    sendForm(formData); // Send form data
});

// Function to send form data
function sendForm(formData) {
    // Show loading message
    var loadingMessage = document.querySelector('.loading');
    loadingMessage.style.display = 'block';

    // Send email using EmailJS
    emailjs.send('service_6qiytlg', 'template_6gequs8', {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        people: formData.get('people'),
        message: formData.get('message')
    })
        .then(function (response) {
            // Hide loading message
            loadingMessage.style.display = 'none';

            // Check if email was sent successfully
            if (response.status === 200) {
                showSuccessMessage(); // Show success message
            } else {
                showError(); // Show error message
            }
        })
        .catch(function (error) {
            // Hide loading message
            loadingMessage.style.display = 'none';
            showError(); // Show error message
        });
}

// Function to show success message
function showSuccessMessage() {
    var successMessage = document.querySelector('.sent-message');
    successMessage.style.display = 'block';
    successMessage.style.color = 'white';
    successMessage.style.backgroundColor = 'red'; // Set the background color to #ffb03b
}
