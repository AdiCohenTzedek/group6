//the connection between html to JS at about us
document.querySelectorAll('.training-list li').forEach(item => {
  item.addEventListener('click', function() {
    console.log('Training chosen:', this.textContent);
  });
});
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');
    window.addEventListener('scroll', () => {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 2;

        if(sectionPos < screenPos){
            console.log("המשתמש נמצא בסעיף 'אודות'");
            // תוסיפי כאן קוד לשינוי אלמנטים או הוספת אפקטים
        }
    });
});

// the connection between html to JS at choose_workout
document.addEventListener('DOMContentLoaded', () => {
  const addButtons = document.querySelectorAll('.workout-list .add-button');
  addButtons.forEach(button => {
    button.addEventListener('click', function () {
      // הסרת הסימון מכל השיעורים האחרים
      document.querySelectorAll('.workout-item.selected').forEach(item => item.classList.remove('selected'));

      // הוספת הסימון לשיעור הנוכחי
      const workoutItem = this.closest('.workout-item');
      workoutItem.classList.add('selected');

      const workoutInfo = workoutItem.querySelector('.workout-info').textContent.trim();
      const trainerName = workoutItem.querySelector('.trainer').textContent;
      const time = workoutItem.querySelector('.time').textContent;

      // הוספת הודעה קופצת מותאמת אישית
      alert(`נבחר אימון: ${workoutInfo}\nמאמן: ${trainerName}\nשעה: ${time}`);
    });
  });
});


//the connection between html to JS at login
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

//the connection between html to JS at sign_up
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



//the connection between html to JS at home_page
document.addEventListener('DOMContentLoaded', () => {
    // תפיסת כל הקישורים בדף
    const links = document.querySelectorAll('.nav-buttons a');

    // הוספת מאזין לאירוע 'click' לכל קישור
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // מניעת השליחה הרגילה של הקישור
            const userChoice = confirm('האם אתה בטוח שאתה רוצה לעבור לעמוד חיצוני? לחץ אישור כדי לעבור או ביטול כדי להישאר');
            if (userChoice) {
                window.location.href = this.href; // מעביר את המשתמש לקישור אם בחר OK
            }
        });
    });
});


// חיבור ל-JS עבור מערכת השעות
document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.querySelector('.schedule-container table');

    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        // בדיקה רק לתאים שמכילים שיעורים, לא תאי שעות
        if (cell.cellIndex !== 0) {
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('highlight');
            });
            cell.addEventListener('mouseleave', () => {
                cell.classList.remove('highlight');
            });
        }
    });
});


