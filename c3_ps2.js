let num=7;
while(true){
    let random_num=Number(prompt("Enter a no btw 1-10"));
    if(random_num==num){
        alert("Numbers matched");
        break;
    }
    else{
         alert("Wrong number");
    }
}