// Animate the main heading
const mainHeading = document.getElementById('main-heading');
mainHeading.style.transform = 'translateY(-100px)';
mainHeading.style.opacity = 0;

setTimeout(() => {
    mainHeading.style.transform = 'translateY(0)';
    mainHeading.style.opacity = 1;
    mainHeading.style.transition = 'all 1s ease-in-out';
}, 500);

// Add some animation effects to the sections
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    section.style.transform = 'translateX(-100px)';
    section.style.opacity = 0;

    setTimeout(() => {
        section.style.transform = 'translateX(0)';
        section.style.opacity = 1;
        section.style.transition = 'all 1s ease-in-out';
    }, 1000);
});