
// source code effect backrgound color all circle ground
export class ModulusColor{
    constructor(classColor, elements, count){
        this._classColor = classColor
        this._elements = elements
        this._count = count
    }

    effectColSet(){

        if(this._elements.length <= 1){
            console.log("YESS")
           setInterval(() =>{
            let gandaTime = this._count++;
               if(gandaTime % 2 == 0){

                   this._elements[0].classList.add(this._classColor)
               
                }else{
                    this._elements[0].classList.remove(this._classColor)
                };
           }, 1000); 
        
        }else{
            setInterval(() =>{
                let gandaTime = this._count++;
                this._elements.forEach(item =>{
                    if(gandaTime % 2 == 0){
                        item.classList.add(this._classColor)
                    
                    }else{
                        item.classList.remove(this._classColor)
                    };
                })
            }, 1000)
        };
    };
};




// for window scrolling
// *** It will complete **
export class WindowScroll{

    constructor(valueCmp, elementCmp, classCmp){
        this._cmp1 = valueCmp;
        this._cmp2 = elementCmp;
        this._cmp3 = classCmp;
    };

    scrollingEmet(){
        let value = this._cmp1;
        let mentahComponent = this._cmp2;
        let classComponent = this._cmp3;

        $(window).scroll(async function(){
            let scrolling = $(this).scrollTop();


            if(scrolling >= value){
                // console.log("ketemu");

                if(mentahComponent.length > 1){
                    console.log("asas")
                    mentahComponent.forEach((item, index) =>{
                        setTimeout(() =>{
                            item.classList.add(classComponent);
                        }, 400 * index);
                    })

                }else{
                    console.log("saqsasasaa")
                    mentahComponent[0].classList.add(classComponent);

                    if(classComponent == "registerLeft"){
                        console.log("SAsa")
                        
                        setTimeout(() =>{
                            mentahComponent[0].style.transition = "0.40s ease";
                            mentahComponent[0].style.boxShadow = "40px 0px 37px -10px rgba(0,0,0,0.35) inset";    
            
                        }, 1100);
                        
                    };
                };



            };
  
        });



    };
};


class ButtonAndLoop extends WindowScroll{
    constructor(valueCmp, elementCmp, classCmp, elementBtn,classBtn){
        super(valueCmp, elementCmp, classCmp);
        this._elementBtn = elementBtn;
        this._classBtn = classBtn;
    };



    somethingButton(){
        if(this._elementBtn.length <= 1){
            console.log(this._elementBtn);
            this.elementBtn.addEventListener(this._classBtn, function(){
                // do something
            })
        
        }else{
            // do something btn
        }
    }

}



// // scrolling all effect
// export function scrollWindow(classComponent1 = undefined, classComponent2 = undefined, classComponent3 = undefined, classComponent4 = undefined){

    
//     $(window).scroll(function(){
//         let scrolling = $(this).scrollTop();
//         // console.log(scrolling)

//         if(!(classComponent1 == undefined || classComponent2 == undefined || classComponent3 == undefined || classComponent4 == undefined)){

//             if(scrolling >= classComponent4[6]){
//                 // console.log("Nyampeeee");
//                 classComponent4[7].classList.add("registerLeft");
    
//                 if(classComponent4[7].classList.contains("registerLeft")){
    
//                     setTimeout(() =>{
//                         classComponent4[7].style.transition = "0.40s ease";
//                         classComponent4[7].style.boxShadow = "40px 0px 37px -10px rgba(0,0,0,0.35) inset";    
    
//                     }, 1100)
//                 }
//             };
    
        
//             if(scrolling >= classComponent1[0]){
//                 classComponent1[1].classList.add("horizontalLeft");
//                 // console.log(classComponent1[0])
//                 // console.log("nyampe");
//             };
    
//             if(scrolling >= classComponent2[2]){
//                 // console.log("nyampe");
                
//                 classComponent2[3].classList.add("horizontalRight");
//             };
            
//             if(scrolling >= classComponent3[4]){
//                 // console.log("nyampe");
//                 classComponent3[5].classList.add("horizontalLeftLast");
//             };  

//         }else{
//             console.log(undefined)
//         }



//     });
// };




// nav effect hooverr


export function  navAdding(effect, mouse, link){

    let nameSelect =  mouse.innerText;
    
    effect.forEach(editNav =>{
        if(editNav.classList.contains(nameSelect)){
            editNav.classList.add("editNav");
            link.addEventListener("click", function(){

                setTimeout(() =>{
                    editNav.classList.remove("editNav")
                }, 300);
            });

            // console.log(link)

            link.addEventListener("mouseout", function(){
                editNav.classList.remove("editNav");
            })
            

        }else{
            editNav.classList.remove("editNav");
        }
    });


}
