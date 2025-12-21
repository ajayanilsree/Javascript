// let divShanki=document.querySelector(".my-div");

// divShanki.onmouseover=()=>{
//     divShanki.style.backgroundColor="red";
//     divShanki.innerText="Box 1";
// }
// divShanki.onmouseover=()=>{
//    divShanki.style.color="white";
// }

// divShanki.onmouseout=()=>{
//     divShanki.style.backgroundColor="yellow";
//     divShanki.innerText="Box 2";
//     divShanki.style.width="100px";
//     divShanki.style.height="100px";
// }
// divShanki.ondblclick=()=>{
//     divShanki.style.backgroundColor="green";
//     divShanki.innerText="Box 3";
//     divShanki.style.width="200px";
//     divShanki.style.height="200px";
// }  

// let divShanki=document.querySelector(".my-div");

// divShanki.addEventListener("mouseover",()=>{
//     divShanki.style.backgroundColor="red";
//     divShanki.innerText="Box-1";
// });

// divShanki.addEventListener("mouseover",()=>{
//     divShanki.style.color="white";
// });

// divShanki.addEventListener("click",()=>{
//     divShanki.style.height="200px";
//     divShanki.style.width="200px";
// });

let divShanki=document.querySelector(".my-div");

let myClick=()=>{
    divShanki.style.height="200px";
    divShanki.style.width="200px";
}

divShanki.addEventListener("click",myClick);