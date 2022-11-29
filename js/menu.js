"use strict";

let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu-points");

menuButton.addEventListener('click', function(){
menu.classList.toggle('menu-points_hidden');
menuButton.classList.toggle('menu-button_active');
if(document.body.style.overflow != "hidden")
    document.body.style.overflow = "hidden";
    else
    document.body.style.overflow ='';
});
menu.addEventListener('click', function(){
menu.classList.toggle('menu-points_hidden');
menuButton.classList.toggle('menu-button_active');
if(document.body.style.overflow != "hidden")
    document.body.style.overflow = "hidden";
    else
    document.body.style.overflow ='';
});