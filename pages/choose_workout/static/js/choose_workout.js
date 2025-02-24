document.addEventListener('DOMContentLoaded', () => {
  const addButtons = document.querySelectorAll('.workout-list .add-button');
  addButtons.forEach(button => {
    button.addEventListener('click', function () {

      document.querySelectorAll('.workout-item.selected').forEach(item => item.classList.remove('selected'));


      const workoutItem = this.closest('.workout-item');
      const workoutName = workoutItem.querySelector('.workout-name p').textContent.trim(); // תיקון שם המחלקה
      const trainerName = workoutItem.querySelector('.trainer-info .trainer').textContent.trim(); // תיקון שם המחלקה
      const time = workoutItem.querySelector('.time').textContent.trim();
      const day = document.querySelector('.weekdays .highlighted').textContent.trim();

      if (confirm(`נבחר אימון: ${workoutName}\nמאמן: ${trainerName}\nשעה: ${time}\nלאשר את הבחירה?`)) {
        fetch('/register_workout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            workout_type: workoutName,
            trainer: trainerName,
            time: time,
            day: day
          })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert("האימון נבחר ונשמר בהצלחה!");
          } else {
            alert("שגיאה בהרשמה לאימון: " + data.error);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert("שגיאה בתקשורת עם השרת.");
        });
      }
    });
  });
});
