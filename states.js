// states.js - Handles state selection functionality
document.addEventListener("DOMContentLoaded", async () => {
    // Check if user is logged in
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    const userEmail = sessionStorage.getItem("userEmail");
    
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      window.location.href = "login.html";
      return;
    }
    
    // Display welcome message with user email
    if (userEmail) {
      document.getElementById("welcomeUser").textContent = `Welcome, ${userEmail}! Please select a state to explore.`;
    }
    
    // Handle logout
    document.getElementById("logoutLink").addEventListener("click", (e) => {
      e.preventDefault();
      // Clear session storage
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("userEmail");
      // Redirect to home page
      window.location.href = "index.html";
    });
    
    // Load state options
    const stateSelect = document.getElementById("stateSelect");
    try {
      const response = await fetch('places.json');
      if (!response.ok) {
        throw new Error('Failed to fetch places data');
      }
      const placesData = await response.json();
      
      // Add options for each state
      Object.keys(placesData).forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error loading states:', error);
      stateSelect.innerHTML = '<option value="">Error loading states</option>';
    }
    
    // Handle explore button click
    document.getElementById("exploreButton").addEventListener("click", () => {
      const selectedState = stateSelect.value;
      if (selectedState) {
        // Redirect to state tourism page with the selected state
        window.location.href = `state-tourism.html?state=${encodeURIComponent(selectedState)}`;
      } else {
        alert("Please select a state to explore.");
      }
    });
    
    // Also trigger on select change
    stateSelect.addEventListener("change", (e) => {
      // Optional: automatically redirect when a state is selected
      // If you prefer the button approach instead, you can comment this out
      /*
      const selectedState = e.target.value;
      if (selectedState) {
        window.location.href = `state-tourism.html?state=${encodeURIComponent(selectedState)}`;
      }
      */
    });
  });