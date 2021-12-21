import {
    // scrollWindow,
    navAdding,
    ModulusColor,
    WindowScroll
} from './logic.js';





const getNav = document.querySelector("nav");
const backgroundNav = document.querySelector(".parent-first");



// responsive

const imageFull = document.querySelectorAll(".gambar-full");
const textFull = document.querySelectorAll(".text-full");





// save
let storageEffect = [];

function dataEffect(size, elementParents){
    storageEffect.push(size, elementParents);

    return storageEffect;
}


// this course effect box 
const parentSquare = document.querySelector("#fitur");
const getAllSquare = document.querySelectorAll(".box .square");

// dialog effect
const getAllDialog = document.querySelectorAll(".text-dialog");
const parentDialog = document.querySelector("#question");


// effetc showboxsay
const getAllboxSay = document.querySelectorAll(".box-parent-say .box-say");
const parentBoxSay = document.querySelector("#testimoni");



// scroll effect 
const photoRegister1 = document.querySelectorAll(".right-img-create1 .card-photo-left");
const photoRegister2 = document.querySelectorAll(".right-img-create1 .card-photo-left2");
const photoRegister3 = document.querySelectorAll(".card-photo-left3");
const getRegister = document.querySelectorAll(".register");
const effectRegister = document.querySelectorAll(".register .follow-step");


// Extra large devices (large desktops, 1200px and up)
if(window.matchMedia("(min-width: 1200px)").matches){


    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 3400, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 3450, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 3500, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 2900, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();

    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop - 250, getAllSquare, "showSquare");
    
    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 400, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 510, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();




};

// Large devices (desktops, less than 1200px)
if(window.matchMedia("(min-width: 992px) and (max-width: 1199.98px)").matches){
    

    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 3400, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 3440, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 3450, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 2700, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();


    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop - 250, getAllSquare, "showSquare");

    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 480, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 460, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();
    



};

// Medium devices (tablets, 768px and up)
if(window.matchMedia("(min-width: 768px) and (max-width: 991.98px)").matches){

    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 3950, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 3980, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 3930, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 3300, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();


    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop - 250, getAllSquare, "showSquare");

    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 480, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 400, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();

    

};


// Small devices (landscape phones, 576px and up)
if(window.matchMedia("(min-width: 576px) and (max-width: 767.98px)").matches){

    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 4900, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 4950, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 4935, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 4300, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();


    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop, getAllSquare, "showSquare");

    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 480, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 400, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();

    
};



// Extra small devices (portrait phones, less than 576px)
if(window.matchMedia("(min-width: 410.92px) and (max-width: 575.98px)").matches){

    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 5350, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 5350, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 5310, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 4600, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();


    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop + 30, getAllSquare, "showSquare");

    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 490, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 400, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();

    

};



if(window.matchMedia("(max-width: 409px)").matches){

    // scrollWindow(
    //     dataEffect(photoRegister1.offsetTop + 6000, photoRegister1), dataEffect(photoRegister2.offsetTop + 6000, photoRegister2), 
    //     dataEffect(photoRegister3.offsetTop + 6000, photoRegister3), 
    //     dataEffect(effectRegister.offsetTop + 5220, effectRegister) 
    //     );

    // select object
    const effectPhotoRegister1 = new WindowScroll(photoRegister1[0].offsetTop + 6000, photoRegister1, "horizontalLeft");
    const effectPhotoRegister2 = new WindowScroll(photoRegister2[0].offsetTop + 6000, photoRegister2, "horizontalRight");
    const effectPhotoRegister3 = new WindowScroll(photoRegister3[0].offsetTop + 6000, photoRegister3, "horizontalLeftLast");
    const effectRegisterEm = new WindowScroll(effectRegister[0].offsetTop + 5220, effectRegister, "registerLeft");
    
    // effect scroll
    effectPhotoRegister1.scrollingEmet();
    effectPhotoRegister2.scrollingEmet();
    effectPhotoRegister3.scrollingEmet();
    effectRegisterEm.scrollingEmet();


    // effect loop scroll

    const effectAllBox = new WindowScroll(parentSquare.offsetTop + 70, getAllSquare, "showSquare");

    const effectShowDialog = new WindowScroll(parentDialog.offsetTop - 200, getAllDialog, "showDialog");
    
    const effectBoxSay = new WindowScroll(parentBoxSay.offsetTop - 120, getAllboxSay, "showBoxSay");
    
    effectAllBox.scrollingEmet();
    effectShowDialog.scrollingEmet();
    effectBoxSay.scrollingEmet();

    // $(window).scroll(function(){
    //     let wsc = $(this).scrollTop();
    //     if(wsc >= parentSquare.offsetTop + 70){
    //         // console.log("nyampe")
    //         getAllSquare.forEach((square, index) =>{
    //             setTimeout(() =>{
    //                 square.classList.add("showSquare");
    //             }, 850 * index)
    //         });
    //     };


    //     // dialog show
    //     if(wsc >= parentDialog.offsetTop - 200){
    //         // console.log("yeee")
    //         getAllDialog.forEach((dialog, index) =>{
    //             setTimeout(() =>{
    //                 dialog.classList.add("showDialog");
    //             }, index * 550)
    //         })
    //     }


    //     // parent box-say
    //     if(wsc > parentBoxSay.offsetTop - 120){
    //         console.log("jisajijsaisjai")
    //         getAllboxSay.forEach((boxSay, index) =>{
    //             setTimeout(() =>{
    //                 boxSay.classList.add("showBoxSay");
    //             }, index * 900);
    //         })
    //     }

    // });
};





// effect backrgound color all circle ground && press me
const circleGround = document.querySelectorAll(".circle-ground1");
// repeatAll(circleGround);
const getPress = document.querySelectorAll(".content-press p a");

const effectPress = new ModulusColor("effectPress", getPress, 1);
const effecttCircleGround = new ModulusColor("color-set", circleGround, 1);

effectPress.effectColSet();
effecttCircleGround.effectColSet();
// console.log(tester.length)


// navbar scrollink animation
const getHome = document.querySelector(".title");
const getLink = document.querySelectorAll(".scroll-top-ws");


getLink.forEach(allButtonLink =>{
    allButtonLink.addEventListener("click", function(e){
        const getAttr = this.getAttribute("href");
        const parentLink = $(`${getAttr}`);
    
        $("html, body").animate({
            scrollTop: parentLink.offset().top - 80
        })
    
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


// nav effect 

const getNavLiA = document.querySelectorAll("nav ul li a");
const getEffectFull = document.querySelectorAll("nav ul li .effect-full");


getNavLiA.forEach(aHref =>{
    aHref.addEventListener("mouseover", function(){
    navAdding(getEffectFull, this, aHref);
        
    });
})

// crete element and select all img
let getAllImgHov = document.querySelectorAll(".step-content .step-to-step img");
const darkShaddowBody = document.createElement("div");
darkShaddowBody.classList.add("box-shaddow-img");
let parentDark = document.querySelector(".parent-dark-box");


// create element img && setAtribute
const elementImg = document.createElement("img");
elementImg.classList.add("image-dark");
elementImg.classList.add("img-fluid");




// span hoover
let fadeSpan = document.querySelectorAll(".step-content .step-to-step .zoom-fade span");

fadeSpan.forEach(span =>{
    span.addEventListener("mouseover", function(){
        // console.log(this)
        span.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
        span.style.transform = `scale(0)`;
        span.style.color = 'white';
        span.style.fontSize = '4em';
        span.style.cursor = "pointer";

    });


})


// effect close in dark box shaddow
const closeBtn = document.querySelector(".parent-dark-box button");


// adding element in img
const zoomClick = document.createElement("div");
zoomClick.classList.add("zoom-fade");
getAllImgHov.forEach(img => {

    img.addEventListener("click", function(e){
        closeBtn.parentElement.parentElement.classList.remove("activit");
        parentDark.appendChild(darkShaddowBody);

        // spanHideEffect
        fadeSpan.forEach(spanHide =>{
            spanHide.style.backgroundColor = `transparent`;
            spanHide.style.transform = `scale(1)`;
            spanHide.style.color = 'transparent';
            spanHide.style.fontSize = '1em';
            spanHide.style.cursor = "pointer";
        })


        // effect parent style
        parentDark.style.transition = "0.60s ease";
        parentDark.style.position = "fixed";
        parentDark.style.top = "0";
        parentDark.style.left = "0";
        parentDark.style.bottom = "0";
        parentDark.style.right = "0";
        parentDark.style.background = `rgba(0, 0, 0, 0.8)`;
        parentDark.style.zIndex = 10;
        getNav.style.zIndex = 8;

        // button close
        darkShaddowBody.appendChild(closeBtn);
        closeBtn.style.margin = '0 auto';
        closeBtn.addEventListener("click", function(){
            this.parentElement.parentElement.classList.add("activit");

        })

        // parent box-shaddow
        darkShaddowBody.appendChild(elementImg);
        darkShaddowBody.style.height = "100%";
        darkShaddowBody.style.width = "50%";
        darkShaddowBody.style.display = "flex";
        darkShaddowBody.style.flexDirection = "column";
        darkShaddowBody.style.justifyContent = "center";
        darkShaddowBody.style.alignContent = "center";
        darkShaddowBody.style.gap = "45px";
        darkShaddowBody.style.margin = "auto";
        elementImg.style.transition = "1.20s ease";
        let imgSrc = e.target.src;

        elementImg.setAttribute("src", imgSrc);
        elementImg.style.transform = `scale(0)`;
        elementImg.style.opacity = '0';
        elementImg.style.backgroundSize = "cover";
        elementImg.style.backgroundRepeat = "no-repeat";
        // elementImg.style.height = "400px";

        // elementImg.style.margin = "300px auto";
        elementImg.style.display = "flex";
        darkShaddowBody.style.zIndex = 15;

        setTimeout(() =>{
            elementImg.style.transform = `scale(1)`;
            elementImg.style.boxShadow = `0px 0px 10px 4px rgba(255,255,255,0.4)`;
            elementImg.style.opacity = '1';
            closeBtn.classList.add("effectClose");
        }, 200);

    });
})










// Answer Question Effect
const getAllBar = document.querySelectorAll(".wood .bar1");
const halfCircle = document.querySelector(".half-circle");

halfCircle.addEventListener("click", function(){
    this.style.transform = `translateX(500px)`;

    getAllBar.forEach((bar, index) => {
        setTimeout(() =>{
            bar.classList.add("showBar");
        }, 500 * (index));
    });
});











