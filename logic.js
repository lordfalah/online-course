// Remove colom responsive 
export function fullCollom(full){
    full.forEach(allImg =>{
        let getString = allImg.className.split(" ")[0];
        
        if(getString === "gambar-full"){
            allImg.classList.remove("col-md-8");
            console.log("col 8");
        
        }else if(getString === "text-full"){
            allImg.classList.remove("col-md-4");
            console.log("col 4");
        };
    });
};



// source code effect backrgound color all circle ground
let count = 1;
export function repeatAll(all){
    setInterval(() =>{
        let ganda = count++;

        if(ganda % 2 == 0){
            all.forEach(allCircle => {
                allCircle.classList.add("color-set");
            });
        
        }else{
            // console.log("Modulus 1");
            all.forEach(allCircle => {
                allCircle.classList.remove("color-set");
            });
        };
    }, 1000);
};



// scrolling all effect
export function scrollWindow(classComponent1, classComponent2, classComponent3, classComponent4){
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        
        // console.log(scrolling);

        if(scrolling >= classComponent4.offsetTop + 2900){
            console.log("nyampe");
            classComponent4.classList.add("registerLeft");

            if(classComponent4.classList.contains("registerLeft")){
                console.log(true)
                setTimeout(() =>{
                    classComponent4.style.transition = "0.80s ease";
                    classComponent4.style.boxShadow = "23px 0px 37px -10px rgba(0,0,0,0.15) inset";    
                }, 1100)
            }
        };

        if(scrolling >= classComponent1.offsetTop + 3400){
            // console.log("nyampe");
            classComponent1.classList.add("horizontalLeft");
        };

        if(scrolling >= classComponent2.offsetTop + 3450){
            classComponent2.classList.add("horizontalRight");
        };
        
        if(scrolling >= classComponent3.offsetTop + 3500){
            // console.log("hayukk")
            classComponent3.classList.add("horizontalLeftLast");
        };  

    });
};




// adokasodkosdkaodkodkaoskodkoksao