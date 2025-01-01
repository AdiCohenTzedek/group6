document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('.sign-up-form');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // איסוף נתונים
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const age = document.getElementById('age').value.trim();
            const phone = document.getElementById('phone').value.trim();

            // בדיקות תקינות
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^05\d{8}$/;

            let errorMessages = []; // משתנה לאיסוף הודעות שגיאה

            // בדיקה אם כל השדות מלאים
            if (!email || !password || !firstName || !lastName || !age || !phone) {
                errorMessages.push('יש למלא את כל השדות.');
            }

            // בדיקת תקינות אימייל
            if (email && !emailRegex.test(email)) {
                errorMessages.push('אימייל לא תקין. יש להזין כתובת מייל תקינה.');
            }

            // בדיקת תקינות טלפון
            if (phone && !phoneRegex.test(phone)) {
                errorMessages.push('מספר טלפון לא תקין. יש להזין מספר שמתחיל ב-05 וכולל 10 ספרות.');
            }

            // אם יש שגיאות, הצגת הודעה
            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n')); // הצגת כל הודעות השגיאה ברצף
                return;
            }

            // אם הכל תקין
            alert('הרישום בוצע בהצלחה!');
        });
    } else {
        console.log('טופס הרשמה לא נמצא');
    }
});