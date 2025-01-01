document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Login Attempt:', email, password);
      // הוספת פונקציונליות לשליחת נתונים לשרת יכולה להתבצע כאן
    });
  } else {
    console.log('Login form not found');
  }
});