document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("registerLink");
  const loginLink = document.getElementById("loginLink");

  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "register.html"; // or use dynamic loading if SPA
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
  });
});




document.getElementById("showLogin").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("registerForm").classList.remove("active");
});

document.getElementById("showRegister").addEventListener("click", () => {
  document.getElementById("registerForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");
});
