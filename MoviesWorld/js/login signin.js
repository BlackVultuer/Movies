//--------------------------------links columns----------------------------------------
let backHeader = document.getElementById("header");
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
//-----------------------------------log-in sign-in------------------------------------
let myEye = document.getElementById('eye');
let notEye = document.getElementById('not-eye');
let myInput = document.getElementById('pass');
myInput.setAttribute('type', 'password');
myEye.onclick = () => {
    myInput.setAttribute('type', 'text');
    myEye.style.display = "none";
    notEye.style.display = "block";
}
notEye.onclick = () => {
    myInput.setAttribute('type', 'password');
    myEye.style.display = "block";
    notEye.style.display = "none";
}
//------------------------------------------------------
let Register = document.getElementById("register");
let alog = document.getElementById("alog");
let logIn = document.getElementById("log-in");
let areg = document.getElementById("aRegister");

alog.onclick = () => {
    Register.style.visibility = "hidden";
    Register.style.opacity = "0";
    logIn.style.visibility = "visible";
    logIn.style.opacity = "1";
}

areg.onclick = () => {
    Register.style.visibility = "visible";
    Register.style.opacity = "1";
    logIn.style.visibility = "hidden";
    logIn.style.opacity = "0";
}
//----------------------------------------------------
let showPass = document.getElementById("showpass");
let hidPass = document.getElementById("not-eye");
let passWord = document.getElementById("password");
passWord.setAttribute('type', 'password');
showPass.onclick = () => {
    passWord.setAttribute('type', 'text');
    showPass.style.display = "none";
    hidPass.style.display = "block";
}
notEye.onclick = () => {
    passWord.setAttribute('type', 'password');
    showPass.style.display = "block";
    hidPass.style.display = "none";
}
