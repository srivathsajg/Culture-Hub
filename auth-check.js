// auth-check.js - Simple script to check authentication status
(function() {
    // Pages that require authentication
    const protectedPages = ['states.html', 'state-tourism.html'];
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Check if this is a protected page
    if (protectedPages.includes(currentPage)) {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      
      if (!isLoggedIn) {
        // Redirect to login
        window.location.href = "login.html";
      }
    }
    
    // If on login/register page and already logged in, redirect to states
    if ((currentPage === 'login.html' || currentPage === 'register.html') && 
        sessionStorage.getItem("isLoggedIn") === "true") {
      window.location.href = "states.html";
    }
  })();