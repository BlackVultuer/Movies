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
        scrollTop.style.visibility="visible";
        scrollTop.style.opacity="1";

    }
    else {
        scrollTop.style.visibility="hidden";
        scrollTop.style.opacity="0";
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
    bars.style.display = "none";
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
//---------------------------------------------------------------------