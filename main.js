let Bar_drop= document.querySelectorAll(".Bar_drop")
let dropped__show= document.querySelectorAll(".dropped__show")
let btn__drop= document.querySelectorAll(".btn--drop")
let btn__dropsvg= document.querySelectorAll(".btn--drop svg")

btn__drop.forEach((e ,i) => {
    e.addEventListener("click", click => {
       
        if(dropped__show[i].classList.contains("dropped__show1")){
                               dropped__show.forEach(e=>e.classList.remove('dropped__show1'))
                               btn__drop.forEach(e=>e.classList.remove('btn--drop1'))
                               btn__dropsvg.forEach(e=>e.classList.remove('rotate'))

        }else{
            dropped__show.forEach(e=>e.classList.remove('dropped__show1'))
            btn__drop.forEach(e=>e.classList.remove('btn--drop1'))
            btn__dropsvg.forEach(e=>e.classList.remove('rotate'))

        dropped__show[i].classList.toggle('dropped__show1') 
        btn__drop[i].classList.toggle('btn--drop1') 
        btn__dropsvg[i].classList.toggle('rotate') 

        }

      })
    })


    let humburgerIcon=document.querySelector("#humburgerIcon")
let header=document.querySelector("#header")

let naver__Bar =document.querySelectorAll(".naver__Bar")
let nav= document.querySelector(".nav")

 humburgerIcon.addEventListener("click",function (){ 
     humburgerIcon.classList.toggle("humburger--active");
    
    nav.classList.toggle("nav1")
    
    
    
 }
 )
 naver__Bar.forEach(element => {
    element.addEventListener("click",function (){ 
     humburgerIcon.classList.toggle("humburger--active")
    header.classList.toggle("header--active")
    
    
 }
 
 )


})