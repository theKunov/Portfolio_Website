function scrollToSection(event, section) {
    event.preventDefault();
    const targetSection = document.querySelector(section);
    const sectionPosition = targetSection.offsetTop - 100;
    setTimeout(() => {
        window.scrollTo(0, sectionPosition)
    }, 2);
}