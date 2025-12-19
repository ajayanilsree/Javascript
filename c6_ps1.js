boxes=document.querySelectorAll(".box");
console.log(boxes);

let n=1;
for(let box of boxes){
    box.innerText=`BBox ${n}`;
    n=n+1;
}





// boxes[0].innerText="BBox 1";
// boxes[1].innerText="BBox 2";
// boxes[2].innerText="BBox 3";