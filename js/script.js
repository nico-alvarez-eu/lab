// Cookie banner; just show once per user/browser, unless the user deletes the browser cache and storage
const cookieBanner = document.querySelector("#cookie-banner");
const cbCloseBtn = document.querySelector("#cb-close-btn");


if(localStorage.getItem("cookieNoticeState") === "shown"){
    cookieBanner.classList.remove("block");
    cookieBanner.classList.add("none");
}

cbCloseBtn.addEventListener('click', (e) => {
    localStorage.setItem('cookieNoticeState','shown');
    cookieBanner.classList.remove("block");
    cookieBanner.classList.add("none");
});

// Nav menu for mobile
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// Language switch functionality
function checkLang(elem) {
    const langPath = `/${elem.value}`;
    const newUrl = window.location.pathname.replace(/(^[//])\w+/g, langPath);
    window.location.href = newUrl;
}

// Get the current year for the copyright
const currentYear = document.querySelector("#current-year");
const year = new Date().getFullYear();
currentYear.textContent = year;