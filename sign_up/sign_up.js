const user = {
    signUpForm: document.querySelector('.sign-up-form'),

    init: function() {
        if (this.signUpForm) {
            this.bindSignUpForm();
        } else {
            console.log('טופס הרשמה לא נמצא');
        }
    },

    bindSignUpForm: function() {
        this.signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.processSignUpForm();
        });
    },

    processSignUpForm: function() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();

        const isValid = this.validateSignUpForm(email, password, firstName, lastName, age, phone);

        // אנו בודקים את הנתונים בקונסולה לפני שנשלח אותם לשרת
        if (isValid) {
            console.log({
                email: email,
                firstName: firstName,
                lastName: lastName,
                age: age,
                phone: phone
            });

            // שליחה לשרת באמצעות fetch
            fetch('http://127.0.0.1:5000/sign_up', {  // ודא שכתובת ה-URL נכונה
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password, // הוספתי גם את הסיסמא
                    first_name: firstName,
                    last_name: lastName,
                    age: age,
                    phone: phone
                })
            })
            .then(response => {
                if (response.ok) {
                    alert('הרישום בוצע בהצלחה!');
                } else {
                    response.json().then(data => {
                        alert(data.error || 'שגיאה בתהליך הרישום.');
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('שגיאה בתקשורת עם השרת.');
            });
        }
    },

    validateSignUpForm: function(email, password, firstName, lastName, age, phone) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^05\d{8}$/;
        let errorMessages = [];

        if (!email || !password || !firstName || !lastName || !age || !phone) {
            errorMessages.push('יש למלא את כל השדות.');
        }

        if (email && !emailRegex.test(email)) {
            errorMessages.push('אימייל לא תקין. יש להזין כתובת מייל תקינה.');
        }

        if (phone && !phoneRegex.test(phone)) {
            errorMessages.push('מספר טלפון לא תקין. יש להזין מספר שמתחיל ב-05 וכולל 10 ספרות.');
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
            return false;
        }
        return true;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    user.init();
});
