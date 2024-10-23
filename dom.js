// 🚀Document Object Model(DOM)🚀

//document=> document is the pre defined Object given by the JavaScript  which holds the connected html file(index.html)

// console.log(document);
//id=> document.getElementById()
//class=>document.getElementByClassName()
//tag=>document.getELementByTagName()

//universal selector

//document.querySelector()=>to select the first;/Single element
//document.querySelectorAll()=>to select the multiple element

// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.innerText)
// console.log(heading.textContent)
// heading.style.fontSize = "100px"
// console.log(heading.innerHTML = "Good Bye")

//EventListner in JavaScript

// let button = document.querySelector("button")
// console.log(button)
// let heading = document.querySelector("h1")
// console.log(heading)

// button.addEventListener("click",()=>{
//     heading.innerHTML = "<strike>Kaise ho broooo</strike>"
// })

//Create a card with HTML & CSS and add a button which shows follow and the heading which shows "Strange ", when the user click on the  button the text of the button chnges to "Unfollow" and the heading chngges to "Friend  and vice versa"

// let btn = document.querySelector("button");
// let heading = document.querySelector("h1");

// // using if-else 
// btn.addEventListener("click", () => {
//   if (heading.innerHTML === "Friends") {
//     btn.innerHTML = "Follow";
//     heading.innerHTML = "Strange";
//     btn.style.backgroundColor="red"
//   } else {
//     heading.innerHTML = "Friends";
//     btn.innerHTML = "Unfollow";
//     btn.style.backgroundColor="red"

//   }


// });

//using Destructuring 
// btn.addEventListener("click", () => {
//     [heading.innerHTML, btn.innerHTML] =heading.innerHTML==="Friends"?["Strange","Follow"]:["Friends","Unfollow"] 
    
//   });





//Q-2:=>

let nav = document.querySelector("nav")
let menu = document.querySelector(".menu")
let closeMenu = document.querySelector(".close-menu")
console.log(closeMenu)
console.log(menu)
menu.addEventListener("click",()=>{
    nav.style.height = "100%",
    menu.style.display = "none",
    closeMenu.style.display = "initial"
})
closeMenu.addEventListener("click",()=>{
    nav.style.height = "10%",
    menu.style.display = "initial",
    closeMenu.style.display = "none"
})
