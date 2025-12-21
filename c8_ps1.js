let body=document.querySelector("body");
let btn=document.querySelector("#btn");

// let back_dark=()=>{
//     body.style.backgroundColor="black";
// };

// let back_light=()=>{
//     body.style.backgroundColor="white";
// };
let mode=true;
btn.addEventListener("click",()=>{
    if(mode){
        body.style.backgroundColor="black";
        mode=false;
    }
    else{
        body.style.backgroundColor="#F5F2F2";
        mode=true;
    }
});