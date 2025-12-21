let newBtn=document.querySelector(".btn");
let myBody=document.querySelector("body");
let color="dark";

newBtn.addEventListener("click",()=>{
    myBody.classList.toggle("dark");
});


// newBtn.addEventListener("click",()=>{
//     if(color=="dark"){
//         myBody.classList.add("dark");
//         color="light";
//     }
//     else{
//          myBody.classList.remove("dark");
//          color="dark";
//     }
// });