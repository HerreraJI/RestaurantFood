const hamMenu = document.getElementById("hamburger-menu");
const menuArrow = document.getElementById("menu-arrow");
const menu = document.getElementById("menu");


hamMenu.addEventListener("click", function (){
    menu.classList.toggle("side");
})

menuArrow.addEventListener("click", function (){
    menu.classList.remove("side");
})