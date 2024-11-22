// Dummy credentials
const validUsername = "2303A51278";
const validPassword = "Hack@2024";

// Get form and error message elements
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Listen for form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get entered username and password
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Validate credentials
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Redirect to chatbot page
        window.location.href = "VVVV.html";
    } else {
        // Show error message
        errorMessage.style.display = "block";
    }
});
