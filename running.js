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


// save
let storageEffect = [];

function dataEffect(size, elementParents){
    storageEffect.push(size, elementParents);

    return storageEffect;
}

// Extra large devices (large desktops, 1200px and up)
if(window.matchMedia("(min-width: 1200px)").matches){

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 3400, photoRegister1), dataEffect(photoRegister2.offsetTop + 3450, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 3500, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 2900, effectRegister) 
        );


};

// Large devices (desktops, less than 1200px)
if(window.matchMedia("(min-width: 992px) and (max-width: 1199.98px)").matches){
    

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 3400, photoRegister1), dataEffect(photoRegister2.offsetTop + 3440, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 3450, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 2700, effectRegister) 
        );

};

// Medium devices (tablets, 768px and up)
if(window.matchMedia("(min-width: 768px) and (max-width: 991.98px)").matches){
    storageEffect = []; 

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 3950, photoRegister1), dataEffect(photoRegister2.offsetTop + 3980, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 3930, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 3300, effectRegister) 
        );

};


// Small devices (landscape phones, 576px and up)
if(window.matchMedia("(min-width: 576px) and (max-width: 767.98px)").matches){
    storageEffect = []; 

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 4900, photoRegister1), dataEffect(photoRegister2.offsetTop + 4950, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 4935, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 4300, effectRegister) 
        );


};



// Extra small devices (portrait phones, less than 576px)
if(window.matchMedia("(min-width: 410.92px) and (max-width: 575.98px)").matches){

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 5350, photoRegister1), dataEffect(photoRegister2.offsetTop + 5350, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 5310, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 4600, effectRegister) 
        );


};



if(window.matchMedia("(max-width: 409px)").matches){

    scrollWindow(
        dataEffect(photoRegister1.offsetTop + 6000, photoRegister1), dataEffect(photoRegister2.offsetTop + 6000, photoRegister2), 
        dataEffect(photoRegister3.offsetTop + 6000, photoRegister3), 
        dataEffect(effectRegister.offsetTop + 5220, effectRegister) 
        );


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



