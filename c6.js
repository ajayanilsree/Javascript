// let sub_head=document.getElementById("sub-head");
// console.dir(sub_head);
// console.log(sub_head);

// let tech=document.getElementsByClassName("tech");
// // console.log(tech);
// console.dir(tech); 

// let para=document.getElementsByTagName("p");
// console.dir(para);

// let para1=document.querySelector("p");
// console.dir(para1);

// let paraAll=document.querySelectorAll("p");
// console.dir(paraAll);
// divInner=document.querySelector("div").innerText
// console.dir(divInner);

// let boxDiv=document.querySelector("div");
// boxDiv.style.backgroundColor="red";
// // boxDiv.style.visibility="hidden";
// boxDiv.style.height="200px";
// boxDiv.style.width="200px";
// boxDiv.style.border="1px solid black";
// boxDiv.style.borderRadius="10px";
// boxDiv.style.fontSize="25px";
// boxDiv.style.fontWeight="900";
// boxDiv.innerText="BoXX"

let boxDiv=document.querySelector("div");
let myBtn=document.createElement("button");
myBtn.innerText="Click here!";
boxDiv.after(myBtn);
myBtn.remove();