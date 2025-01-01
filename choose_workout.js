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
