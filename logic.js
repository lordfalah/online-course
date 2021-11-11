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
        // console.log(scrolling)


        if(scrolling >= classComponent4[6]){
            // console.log("Nyampeeee");
            // console.log(classComponent4[6])
            // console.log(classComponent4)
            classComponent4[7].classList.add("registerLeft");

            if(classComponent4[7].classList.contains("registerLeft")){

                setTimeout(() =>{
                    classComponent4[7].style.transition = "0.40s ease";
                    classComponent4[7].style.boxShadow = "40px 0px 37px -10px rgba(0,0,0,0.35) inset";    

                }, 1100)
            }
        };

    
        if(scrolling >= classComponent1[0]){
            classComponent1[1].classList.add("horizontalLeft");
            // console.log(classComponent1[0])
            // console.log("nyampe");
        };

        if(scrolling >= classComponent2[2]){
            // console.log("nyampe");
            
            classComponent2[3].classList.add("horizontalRight");
        };
        
        if(scrolling >= classComponent3[4]){
            console.log("nyampe");
            classComponent3[5].classList.add("horizontalLeftLast");
        };  

    });
};




// adokasodkosdkaodkodkaoskodkoksao