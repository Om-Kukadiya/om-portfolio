document.addEventListener('DOMContentLoaded', () => {
    const mainSkills = document.querySelector('.main_skills');
    const about = document.querySelector('.about');
    const project = document.querySelector('.MyProject');
    const contact = document.querySelector('.animinate_form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    observer.observe(mainSkills);
    observer.observe(about);
    observer.observe(project);
    observer.observe(contact);
});
