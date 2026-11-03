import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ercusickgycmtggxzuwo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyY3VzaWNrZ3ljbXRnZ3h6dXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTY2NDcsImV4cCI6MjA1OTk3MjY0N30.4V0sr6qPT3kdyqW0NCNowfWcZCZ34YZ_Dzl3Gi9Vw0Q'; // Replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      alert('Registration successful! Redirecting to place selection...');
      window.location.href = 'home.html';
    }
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login successful! Redirecting to place selection...');
      window.location.href = 'home.html';
    }
  });
}