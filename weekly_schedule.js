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