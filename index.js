const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const homeContainer = document.getElementById("home");

// Listen for the login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // TODO: Check if the username and password are valid
  // For this example, we'll just assume they're correct
  showHome(username);
});

// Listen for the register form submission
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = registerForm["new-username"].value;
  const newPassword = registerForm["new-password"].value;
  const confirmPassword = registerForm["confirm-password"].value;

  // Check that the passwords match
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // TODO: Check if the username is available and the password is valid
  // For this example, we'll just assume they're correct
  showHome(newUsername);
});

// Show the home page with the given username
function showHome(username) {
  // Hide the login and register forms
  loginForm.reset();
  loginForm.parentElement.classList.add("hidden");
  registerForm.reset();
  registerForm.parentElement.classList.add("hidden");

  // Show the home page
  homeContainer.classList.remove("hidden");

  // Update the welcome message with the username
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = `Welcome, ${username}!`;
  homeContainer.prepend(welcomeMessage);

  // Listen for the logout button click
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    // Hide the home page and show the login form
    homeContainer.classList.add("hidden");
    loginForm.parentElement.classList.remove("hidden");
  });
}
