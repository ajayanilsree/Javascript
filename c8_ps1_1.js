let body=document.querySelector("body");
let btn=document.querySelector("#btn");
// let mode=true;

// btn.addEventListener("click",()=>{
//     if(mode){
//         body.classList.add("dark");
//         mode=false;
//     }
//     else{
//         body.classList.remove("dark");
//         mode=true;
//     }
// });

btn.addEventListener("click",()=>{
    body.classList.toggle("dark");
});