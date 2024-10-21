// 🚀Document Object Model(DOM)🚀

//document=> document is the pre defined Object given by the JavaScript  which holds the connected html file(index.html)

console.log(document);
//id=> document.getElementById()
//class=>document.getElementByClassName()
//tag=>document.getELementByTagName()

//universal selector

//document.querySelector()=>to select the first;/Single element
//document.querySelectorAll()=>to select the multiple element

let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.innerText)
console.log(heading.textContent)
heading.style.fontSize = "100px"
console.log(heading.innerHTML = "Good Bye")