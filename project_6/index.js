const home = document.querySelector('#home');
const about = document.querySelector('#about');
const project = document.querySelector('#project');
const contact = document.querySelector('#contact');

const headerHome = document.querySelector('#header-home');
const headerAbout = document.querySelector('#header-about');
const headerProject = document.querySelector('#header-project');
const headerContact = document.querySelector('#header-contact');

function changeHeaderColor(header, color) {
    header.style.backgroundColor = color;
}

const hoverColor = '#4f4f52'; // Misty Blue

home.addEventListener('mouseenter', () => {
    changeHeaderColor(headerHome, hoverColor);
});

home.addEventListener('mouseleave', () => {
    changeHeaderColor(headerHome, '');
});

about.addEventListener('mouseenter', () => {
    changeHeaderColor(headerAbout, hoverColor);
});

about.addEventListener('mouseleave', () => {
    changeHeaderColor(headerAbout, '');
});

project.addEventListener('mouseenter', () => {
    changeHeaderColor(headerProject, hoverColor);
});

project.addEventListener('mouseleave', () => {
    changeHeaderColor(headerProject, '');
});

contact.addEventListener('mouseenter', () => {
    changeHeaderColor(headerContact, hoverColor);
});

contact.addEventListener('mouseleave', () => {
    changeHeaderColor(headerContact, '');
});
