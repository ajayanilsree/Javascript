let body=document.querySelector("body");
let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    body.classList.toggle("dark");
});