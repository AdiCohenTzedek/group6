
document.addEventListener('DOMContentLoaded', () => {
  const addButtons = document.querySelectorAll('.workout-list .add-button');
  addButtons.forEach(button => {
    button.addEventListener('click', function () {
      // הסרת הסימון מכל השיעורים האחרים
      document.querySelectorAll('.workout-item.selected').forEach(item => item.classList.remove('selected'));

      // choosing workout
      const workoutItem = this.closest('.workout-item');
      workoutItem.classList.add('selected');

      const workoutInfo = workoutItem.querySelector('.workout-info').textContent.trim();
      const trainerName = workoutItem.querySelector('.trainer').textContent;
      const time = workoutItem.querySelector('.time').textContent;

      // notify the user and confirm the workout
      if (confirm(`נבחר אימון: ${workoutInfo}\nשעה: ${time}\nלאשר את הבחירה?`)) {
        alert("האימון נבחר בהצלחה!");
      }
    });
  });
});
