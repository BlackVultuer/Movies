//----------------------back-nav-----------------------------------
let backHeader = document.getElementById("header");
let scrollTop = document.getElementById("scroll-top");
window.onscroll = () => {
    if (window.scrollY > 500) {
        backHeader.classList.add('back-header');
    }
    else {
        backHeader.classList.remove('back-header');
    }
    //**************************
    if (window.scrollY > 80) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = "1";

    }
    else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = "0";
    }
}
//--------------------------------links columns----------------------------------------
let bars = document.getElementById("bars");
let times = document.getElementById("times");
let linksColumns = document.getElementById("links-column");
bars.onclick = () => {
    linksColumns.style.visibility = "visible";
    linksColumns.style.opacity = "1";
    times.style.display = "block";
    bars.style.display = "none";
    backHeader.classList.add('back-header');
}
times.onclick = () => {
    linksColumns.style.visibility = "hidden";
    linksColumns.style.opacity = "0";
    times.style.display = "none";
    bars.style.display = "block";
    backHeader.classList.remove('back-header');
}
//------------------------------------search-bar--------------------------------------------
let iconSearch = document.getElementById("search");
let searchBar = document.getElementById("search-bar");
let closeInputSearch = document.getElementById("timesheader");
iconSearch.onclick = function () {
    searchBar.style.visibility = "visible";
    searchBar.style.opacity = "1";
    searchBar.style.width = "300px";
    closeInputSearch.style.opacity = "1";
    closeInputSearch.style.visibility = "visible";
    iconSearch.style.visibility = "hidden";
    iconSearch.style.opacity = "0";
}
closeInputSearch.onclick = () => {
    searchBar.style.visibility = "hidden";
    searchBar.style.opacity = "0";
    searchBar.style.width = "0px";
    closeInputSearch.style.opacity = "0";
    closeInputSearch.style.visibility = "hidden";
    iconSearch.style.visibility = "visible";
    iconSearch.style.opacity = "1";
}
//---------------background image-----------------------------------
let nameMovie = document.getElementById("name-movie");
function changeBack() {
    let landPageClick = document.getElementById("landpage");
    let IMGS = ['url("./images/batman1.jpg")',
        'url("./images/JOKER6.jpg")',
        'url("./images/JHON6.jpg")'
    ];
    let bg = IMGS[Math.floor(Math.random() * IMGS.length)];
    landPageClick.style.background = bg;
    landPageClick.style.backgroundPosition = "center";
    landPageClick.style.backgroundSize = "cover";
    landPageClick.style.backgroundRepeat = "no-repeat";
    if (IMGS[Math.floor(Math.random())] == 0) {
        nameMovie.innerHTML = "Batman begin";
    }
    else if (IMGS[Math.floor(Math.random())] == 1) {
        nameMovie.innerHTML = "The Joker";
    }
    else if (IMGS[Math.floor(Math.random())] == 2) {
        nameMovie.textContent = "Jhon whick";
    }
}

setInterval(changeBack, 3000);
//------------------------------click arrow-----------------------------------
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let cardLeft = document.getElementById("card-left");
//--------------------------title shadwo--------------------------------------
let titleAnimation = document.getElementById("title");
window.onload = () => {
    setInterval(() => {
        titleAnimation.style.textShadow = "0px 0px 20px red";
    }, 1000);
}
//---------------------------------timer movies----------------------------------------
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minuet = document.getElementById("minuets");
let second = document.getElementById("seconds");
var countdate = new Date("nov 10, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdate - now;
    var DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
    var HOUR = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MIN = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var SEC = Math.floor((distance % (1000 * 60)) / 1000);
    days.innerHTML = DAYS;
    if (DAYS < 10) {
        days.innerHTML = "0" + DAYS;
    }
    hours.innerHTML = HOUR;
    if (HOUR < 10) {
        hours.innerHTML = "0" + DAYS;
    }
    minuet.innerHTML = MIN;
    if (MIN < 10) {
        minuet.innerHTML = "0" + DAYS;
    }
    second.innerHTML = SEC;
    if (SEC < 10) {
        second.innerHTML = "0" + DAYS;
    }
    if (distance < 0) {
        clearInterval(x);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minuet.innerHTML = "00";
        second.innerHTML = "00";
    }
}, 1000);
//-------------------------------------------------------------------------------