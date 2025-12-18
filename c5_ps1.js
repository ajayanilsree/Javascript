// function vowels(nam){
//     let count=0;
//     const vowels=['a','e','i','o','u'];
//     for(let ch of nam.toLowerCase()){
//         if (vowels.includes(ch)){
//             count=count+1;
//         }
//     }
//    return count;

// }

// fname=prompt("Enter your name:");
// let vowelNo=vowels(fname);
// console.log(`No of vowels in the string is ${vowelNo}`);

/*Using Arrow Function*/
// let vowels=(nam) => {
//     let count=0;
//     const vowels='aeiou';
//     for(let ch of nam.toLowerCase()){
//         if (vowels.includes(ch)){
//             count=count+1;
//         }
//     }
//    return count;

// }

// fname=prompt("Enter your name:");
// let vowelNo=vowels(fname);
// console.log(`No of vowels in the string is ${vowelNo}`);

/*using traditional method*/
function vowelsCount(fname)
{
    let count=0;
    for(let i=0;i<fname.length;i++)
    {
        if (
        fname[i] == 'A' ||
        fname[i] == 'E' ||
        fname[i] == 'I' ||
        fname[i] == 'O' ||
        fname[i] == 'U'
        ){
            count=count+1;

        }

    }
    return count;

}

let fName="Alex Karp";
let fnameUpper=fName.toUpperCase();

console.log(`The no of vowels are ${vowelsCount(fnameUpper)}`);

