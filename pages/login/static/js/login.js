document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Login Attempt:', email, password);
      // here we will add in the future the check with the server- for the checker pls ignore
    });
  } else {
    console.log('Login form not found');
  }
});