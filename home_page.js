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