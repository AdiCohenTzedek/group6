// the connection between html to JS at about us
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
