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

//the connection between html to JS at choose_workout
document.addEventListener('DOMContentLoaded', () => {
  const addButtons = document.querySelectorAll('.workout-list .add-button');
  addButtons.forEach(button => {
    button.addEventListener('click', function() {
      // הסרת הסימון מכל השיעורים האחרים
      document.querySelectorAll('.workout-item.selected').forEach(item => item.classList.remove('selected'));

      // הוספת הסימון לשיעור הנוכחי
      const workoutItem = this.closest('.workout-item');
      workoutItem.classList.add('selected');

      const workoutInfo = workoutItem.querySelector('.workout-info').textContent.trim();
      const trainerName = workoutItem.querySelector('.trainer').textContent;
      const time = workoutItem.querySelector('.time').textContent;

      console.log(`Added workout: ${workoutInfo}, Trainer: ${trainerName}, Time: ${time}`);
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
  //(Sign In Form)
  const signUpForm = document.querySelector('.sign-up-form');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // איסוף נתונים משדות הטופס
      const email = signUpForm.querySelector('input[type="text"]').value; // הנחתי שהאימייל הוא השדה הראשון של טקסט
      const password = signUpForm.querySelector('input[type="password"]').value;
      const firstName = signUpForm.querySelectorAll('input[type="text"]')[1].value; // הנחתי ששם פרטי הוא השני בסדר
      const lastName = signUpForm.querySelectorAll('input[type="text"]')[2].value; // הנחתי ששם משפחה הוא השלישי בסדר
      const age = signUpForm.querySelector('input[type="number"]').value;
      const phone = signUpForm.querySelector('input[type="tel"]').value;

      console.log('Sign Up Attempt:', { email, password, firstName, lastName, age, phone });
    });
  } else {
    console.log('Sign Up form not found');
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
            const userChoice = confirm('האם אתה בטוח שאתה רוצה לעבור לעמוד חיצוני? לחץ OK כדי לעבור או Cancel כדי להישאר');
            if (userChoice) {
                window.location.href = this.href; // מעביר את המשתמש לקישור אם בחר OK
            }
        });
    });
});

// חיבור ל-JS עבור מערכת השעות
document.addEventListener('DOMContentLoaded', () => {
    const scheduleTable = document.querySelector('.schedule-container table');

    scheduleTable.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'TD' && target.cellIndex > 0) {
            const time = target.parentNode.cells[0].textContent;
            const day = scheduleTable.rows[0].cells[target.cellIndex].textContent;
            const activity = target.textContent;

            // הצגת הפרטים של השיעור
            alert(`שעה: ${time}\nיום: ${day}\nפעילות: ${activity}`);

            // שאלה אם המשתמש רוצה להרשם לשיעור
            const register = confirm('האם תרצה להרשם לשיעור זה?');
            if (register) {
                alert('נרשמת בהצלחה לשיעור!');
                // שאלה על הוספת תזכורת
                const acceptReminder = confirm('האם תרצה לקבל תזכורת לשיעור זה 10 דקות לפני שהוא מתחיל?');
                if (acceptReminder) {
                    alert('תזכורת נוספה בהצלחה!');
                }
            }
        }
    });

    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            if (cell.textContent.trim() !== '' && cell.cellIndex !== 0) { // מונע הדגשה בטור הראשון
                cell.classList.add('highlight');
            }
        });
        cell.addEventListener('mouseleave', () => {
            cell.classList.remove('highlight');
        });
    });
});

