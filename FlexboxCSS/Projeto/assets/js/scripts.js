const btnToggle = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const headerFlex = document.getElementById("headerFlex");
const textoApresentacao = document.getElementById("flexturismo");
const btnSaibaMais = document.getElementsByClassName("saiba-mais")[0];
const btnSaibaMais1 = document.getElementsByClassName("saiba-mais")[1];
const btnSaibaMais2 = document.getElementsByClassName("saiba-mais")[2];
const btnSaibaMais3 = document.getElementsByClassName("saiba-mais")[3];
const containerExterno = document.getElementsByClassName("container-externo")[0];
const footer = document.getElementsByTagName("footer")[0];
const itemPlano0 = document.getElementsByClassName("item-plano")[0];
const itemPlano1 = document.getElementsByClassName("item-plano")[1];
const itemPlano2 = document.getElementsByClassName("item-plano")[2];
const listPlanos = document.getElementsByClassName("list-planos")[0];
const quemSomos = document.querySelector("#quem-somos h2");
const quemSomosBarra = document.querySelector("#quem-somos h2::before");
const darkModeClass = "dark-mode";

btnToggle.addEventListener("click", changeMode);

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    btnToggle.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    headerFlex.classList.toggle(darkModeClass);
    textoApresentacao.classList.toggle(darkModeClass);
    btnSaibaMais.classList.toggle(darkModeClass);
    btnSaibaMais1.classList.toggle(darkModeClass);
    btnSaibaMais2.classList.toggle(darkModeClass);
    btnSaibaMais3.classList.toggle(darkModeClass);
    containerExterno.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    itemPlano0.classList.toggle(darkModeClass);
    itemPlano1.classList.toggle(darkModeClass);
    itemPlano2.classList.toggle(darkModeClass);
    listPlanos.classList.toggle(darkModeClass);
    quemSomos.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Modo Claro";
    const darkMode = "Modo Escuro";


    if(body.classList.contains(darkModeClass)) {
        btnToggle.innerHTML = lightMode;
        return;
    }

    btnToggle.innerHTML = darkMode;
}