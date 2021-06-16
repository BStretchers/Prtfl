
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let popUp1 = document.getElementById("popUp1");
let popUp2 = document.getElementById("popUp2");

let close1 = document.getElementById("close1");
let close2 = document.getElementById("close2");

let mobileNavButton = document.getElementById("hamButton");
let mobileNav = document.querySelector(".hamburger");

let mobileNavOpened = false;

mobileNavButton.addEventListener("click", ()=>{
    if (mobileNavOpened){
        mobileNav.style.display = "none";
        mobileNavOpened = false;
    }else{
        mobileNav.style.display = "flex";
        mobileNavOpened = true;
    }
})

button1.onclick = () => popUp1.style.display = "flex";
button2.onclick = () => popUp2.style.display = "flex";

close1.onclick = () => popUp1.style.display = "none";
close2.onclick = () => popUp2.style.display = "none";