let myBody=document.querySelector("body");
let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
myBody.prepend(newBtn);