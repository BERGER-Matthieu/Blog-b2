//Import -------------------------------------------------
import * as func from "./func.js";
//Variables -------------------------------------------------
const rows = document.querySelectorAll("tr");
const contacts = document.querySelectorAll(".footer__contactList-element");
const legals = document.querySelectorAll(".footer__legal-list-element");
const header = document.querySelector(".header");
const smallHeader = document.querySelector(".small-header");
const cards = document.querySelectorAll(".section__card");

let buttons = document.querySelectorAll(".header__nav-list-element-anchor");
let smallButtons = document.querySelectorAll(".small-header__nav-list-element-anchor");

const replaceText = ['Accueil', 'Logiciel', 'Tarifs', 'A propos', 'Démo'];
const buttonsText = ((buttons) => {
    let returnArray = [];
    buttons.forEach((button) => {
        returnArray.push(button.innerHTML)  
    });
    return returnArray;
})(buttons);

//Events -------------------------------------------------
window.addEventListener("load",() => {
    changeHeaderInnerText();
    func.setTableDataBars(rows);
    func.lockScroll();
    func.removeAfterOnWrap(contacts);
    func.removeAfterOnWrap(legals);
    animateCard();
})

window.addEventListener("resize",() => {
    changeHeaderInnerText();
    func.setTableDataBars(rows);
    func.removeAfterOnWrap(contacts);
    func.removeAfterOnWrap(legals);
})

window.addEventListener("scroll",() => {
    animateCard();
    func.displaySmallHeader(header, smallHeader);
})

//Functions -------------------------------------------------
function changeHeaderInnerText() {
    if (window.innerWidth <= 480) {
        buttons.forEach((button, i) => {
            button.innerHTML = replaceText[i];
        })
    }
    else{
        buttons.forEach((button, i) => {
            button.innerHTML = buttonsText[i];
        })
    }

    if (window.innerWidth <= 768) {
        smallButtons.forEach((button, i) => {
            button.innerHTML = replaceText[i];  
        })
    }
    else{
        smallButtons.forEach((button, i) => {
            button.innerHTML = buttonsText[i];
        })
    }
}

function animateCard() {
    cards.forEach((card, i) => {
        let cardY = card.getBoundingClientRect().y
        let cardH = card.clientHeight;

        let windowY = window.scrollY;
        let windowH = window.innerHeight;

        if ((((windowY + cardY) < windowY + (windowH/4)*3)) && card.dataset.ishero != "true"){
            card.classList.add("show")
        }
    })
}