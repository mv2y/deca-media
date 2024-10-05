// Scroll Animation for Services and Projects
window.addEventListener('scroll', () => {
    const services = document.querySelector('.services-section');
    const projects = document.querySelector('.projects-section');
    const contact = document.querySelector('.contact-section');
    
    const revealSection = (section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('reveal');
        }
    };

    revealSection(services);
    revealSection(projects);
    revealSection(contact);
});
