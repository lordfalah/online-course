import {
    fullCollom, 
    repeatAll,  
    scrollWindow
} from './logic.js';



const getNav = document.querySelector("nav");
const backgroundNav = document.querySelector(".parent-first");



// responsive

const imageFull = document.querySelectorAll(".gambar-full");
const textFull = document.querySelectorAll(".text-full");


// scroll effect 
const photoRegister1 = document.querySelector(".right-img-create1 .card-photo-left");
const photoRegister2 = document.querySelector(".right-img-create1 .card-photo-left2");
const photoRegister3 = document.querySelector(".card-photo-left3");
const getRegister = document.querySelector(".register");
const effectRegister = document.querySelector(".register .follow-step");


if(window.matchMedia("(min-width: 1200px)").matches){


    scrollWindow(photoRegister1, photoRegister2, photoRegister3, effectRegister);

    console.log(effectRegister);

};



// effect backrgound color all circle ground
const circleGround = document.querySelectorAll(".circle-ground1");
repeatAll(circleGround);


// navbar scrollink animation
const getHome = document.querySelector(".title");
const getLink = document.querySelector(".home-link");

getLink.addEventListener("click", function(e){
    const getAttr = this.getAttribute("href");
    const parentLink = $(`${getAttr}`);


    $("html, body").animate({
        scrollTop: parentLink.offset().top
    })


})


$(window).scroll(function(){
    let qScw = document.querySelector("html, body").scrollTop;
    
    if(qScw == 0){
        getNav.style.transition = "0.40s ease";
        getNav.style.backgroundColor = "transparent";
    
    }else{

        getNav.style.backgroundColor = "#6ab7ee";
    }


})



