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

        // we chose to print this check in the console just so you can see we managed to insert to the user object what we needed,
        // for security reasons we chose not to show the password
        if (isValid) {
            console.log({
                email: email,
                firstName: firstName,
                lastName: lastName,
                age: age,
                phone: phone
            });
            alert('הרישום בוצע בהצלחה!');
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
