let num=Number(prompt("Enter the value of N"));
let arrNum=[];
for(let i=1;i<=num;i++){
    arrNum.push(i);
}

let arrSum=arrNum.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(`Sum:${arrSum}`);

let arrProd=arrNum.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(`Product:${arrProd}`);