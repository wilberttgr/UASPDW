// Login form submit event listener
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById('inputName').value;
    var password = document.getElementById('inputPassword').value;

    // Perform login validation (dummy example)
    // You can implement your own logic here, such as checking credentials against a database
    if (name === 'customer' && password === '123') {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', name); // Save logged in user name to localStorage
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Invalid credentials. Please try again.');
    }
});