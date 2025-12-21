let btnClickme=document.querySelector("#btn-clickme");
// btnClickme.onclick=()=>{
//     btnClickme.style.backgroundColor="red";
//     btnClickme.style.width="100px";
//     btnClickme.style.height="50px";
// }

// btnClickme.onmouseover=()=>{
//     btnClickme.style.backgroundColor="green";
//     btnClickme.style.width="100px";
//     btnClickme.style.height="50px";
// }

// btnClickme.onmouseout=()=>{
//     btnClickme.style.backgroundColor="red";
//     btnClickme.style.width="100px";
//     btnClickme.style.height="20px";
   
// }
// btnClickme.addEventListener("click",() =>{
//     btnClickme.style.width="100px";
//     btnClickme.style.height="50px";
// });
// btnClickme.addEventListener("click",() =>{
//     btnClickme.style.color="black";
//     // btnClickme.style.height="50px";
// });

btnClickme.addEventListener("click",()=>{
    console.log("Handler 1")
});

let handler_2=()=>{
    console.log("Handler 2")
};

btnClickme.addEventListener("click",handler_2);

btnClickme.addEventListener("click",()=>{
    console.log("Handler 3")
});

btnClickme.removeEventListener("click",handler_2);