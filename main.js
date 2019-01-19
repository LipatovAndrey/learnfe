'use strict';
const sections = [
    ['login', 'Окно логина'],
    ['profile', 'Профиль'],
    ['netMonitor', 'Делаем запросики']
];
const nav = document.getElementById('navigation');
const application = document.getElementById('application');
const monitorButton = document.getElementById('monitor-button');

for (let section of Array.from(sections)) {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('data-section', section[0]);
    button.value = section[1];
    console.log("in section");
    nav.appendChild(button)
}
const sectionsLiveCollection = application.getElementsByTagName('section');
nav.addEventListener('click', function (event) {
    const targetDataSection =event.target.getAttribute('data-section');
    const sectionsArray = Array.from(sectionsLiveCollection);
    sectionsArray.forEach(function (section) {
        section.hidden = true;
        if (section.getAttribute('id') === targetDataSection){
            section.hidden = false;
        }
    })
});
monitorButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputUrl = document.getElementsByName('url') [0];
    const method = document.getElementsByName('method') [0];
    console.log(inputUrl.value + method.value);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(method.value, inputUrl.value);
    xhr.onreadystatechange = function () {
        if (xhr.readyState ===4){
            console.log(xhr.responseText);
            const monitor = document.getElementById('monitor');
            monitor.textContent = xhr.responseText;
        }
    };
    xhr.send();
    },true);
