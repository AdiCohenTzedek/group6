document.addEventListener('DOMContentLoaded', () => {
  // הרשמה לאימון (קיים כבר)
  const addButtons = document.querySelectorAll('.workout-list .add-button');
  addButtons.forEach(button => {
    button.addEventListener('click', function () {

      document.querySelectorAll('.workout-item.selected').forEach(item => item.classList.remove('selected'));

      // בחירת אימון
      const workoutItem = this.closest('.workout-item');
      // workoutItem.classList.add('selected'); // לא בטוחה האם רוצה

      const workoutInfo = workoutItem.querySelector('.workout-info').textContent.trim();
      const trainerName = workoutItem.querySelector('.trainer').textContent.trim();
      const time = workoutItem.querySelector('.time').textContent.trim();
      const day = document.querySelector('.weekdays .highlighted').textContent.trim();

      // הודעת אישור
      if (confirm(`נבחר אימון: ${workoutInfo}\nשעה: ${time}\nלאשר את הבחירה?`)) {

        // שליחת האימון לשרת
        fetch('/register_workout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            workout_type: workoutInfo,
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
