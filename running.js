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



if(window.matchMedia("(max-width: 1199.98px)").matches){
    // console.log("hayulk");

    fullCollom(imageFull);
    fullCollom(textFull);
};

// effect backrgound color all circle ground
const circleGround = document.querySelectorAll(".circle-ground1");
repeatAll(circleGround);



// scroll effect 
const photoRegister1 = document.querySelector(".right-img-create1 .card-photo-left");
const photoRegister2 = document.querySelector(".right-img-create1 .card-photo-left2");
const photoRegister3 = document.querySelector(".card-photo-left3");
const getRegister = document.querySelector(".register");
const effectRegister = document.querySelector(".register .follow-step");

scrollWindow(photoRegister1, photoRegister2, photoRegister3, effectRegister);

console.log(effectRegister);






