const layers = document.querySelectorAll(".layer")
layers.forEach((elem)=>{
   
        for(i=1;i<=40;i++){

            elem.innerHTML+=`<div class="inner-layer "></div>`
        }
    
    
})

const innerLayer= document.querySelectorAll(".inner-layer")
    innerLayer.forEach((elem2)=>{
        for(let i =1 ; i<=26;i++){
         elem2.innerHTML+=`<div class="shape "></div>`
        }
    })