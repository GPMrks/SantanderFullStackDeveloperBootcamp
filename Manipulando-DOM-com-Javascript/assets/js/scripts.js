const btnToggle = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

btnToggle.addEventListener("click", changeMode);

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    btnToggle.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";


    if(body.classList.contains(darkModeClass)) {
        btnToggle.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    btnToggle.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}