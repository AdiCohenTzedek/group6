console.log("hi")

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log('Login Attempt:', email, password);

      // שליחת הנתונים לשרת
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password }) // שליחת אובייקט JSON

      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('התחברת בהצלחה!');
          window.location.href = '/choose_workout';
        } else {
          alert(data.error || 'שם משתמש או סיסמה שגויים');
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        alert('שגיאה בהתחברות, נסה שוב מאוחר יותר.');
      });
    });
  } else {
    console.log('Login form not found');
  }
});