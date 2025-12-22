let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let win_btn=document.querySelector(".win-btn");
let winner=document.querySelector("#winner");
let new_btn=document.querySelector(".new-btn");

let turn0=true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="0";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
    });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    checkWinner();
  });
});
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        win_btn.classList.add("hide");
    }
}
const resetGame=()=>{
    let turn0=true;
    enableBtn();
}
const winBanner=(posVal1)=>{
    winner.innerText=`Congratulations,${posVal1} is the winner`;
    win_btn.classList.remove("hide");
    disableBtn();
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
        if(posVal1===posVal2 && posVal2===posVal3){
            console.log(`Winner is ${posVal1}`);
            winBanner(posVal1);
        }
    }
    }
    
}

resetBtn.addEventListener("click",resetGame);
new_btn.addEventListener("click",resetGame);