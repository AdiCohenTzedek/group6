document.addEventListener('DOMContentLoaded', function () {
    const removeButtons = document.querySelectorAll('.remove-button');

    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const workoutItem = this.closest('.workout-item');
            const workoutType = workoutItem.getAttribute('data-workout-type');
            const day = workoutItem.getAttribute('data-day');
            const time = workoutItem.getAttribute('data-time');

            if (confirm("האם אתה בטוח שברצונך לבטל את האימון?")) {
                fetch('/delete_workout', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ workout_type: workoutType, day: day, time: time })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert(data.message);
                        location.reload();
                    } else {
                        alert(data.error);
                    }
                })
                .catch(error => console.error('Error:', error));
            }
        });
    });
});
