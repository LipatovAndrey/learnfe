'use strict';

const sections = [
    ['login','Окно логина'],
    ['profile','Профиль'],
    ['about','Оо']
];
const nav = document.getElementById('navigation');

for (let section of Array.from(sections)) {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('data-section', section[0]);
    button.value=section[1];
    console.log("in section");
    nav.appendChild(button)
}