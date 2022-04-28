"use strict"


// setTimeout paleidzia funkcija po tam tikro laika
// setTimeout(function(){
//     alert("Negeriau")
// }, 1000)





// setTimeout(function(){
//    var h1 = document.querySelector("h1")
//    h1.classList.add("heading") // pasirenki style is class heading kuris yra style
// }, 1000)



var button = document.querySelector("button")
var h1 = document.querySelector("h1")
// pridedam prie button click funkcijos ,kai paspaudus mygtuka atsiranda h1 setTimeout funkcija
button.addEventListener("click", function(){
 setTimeout(function(){
   h1.style.transform = "scale(2)"
}, 100)

 setTimeout(function(){
   h1.style.color = "crimson"
}, 1000)

// funkcija kuri body width padidina is 300px iki 100% taip gauname animation is kaires i centra
 setTimeout(function(){
   document.body.style.width = "100%"
}, 1000)

})
