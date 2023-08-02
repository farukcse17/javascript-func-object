// write a function called odd_even() which takes an integer value and tells whether this value is even or odd. you need to do it in 4 ways:
// 1. Has return + Has parameter
// 2. No return + has parameter 

//1. odd_even() function Has return + Has parameter
// function odd_even(a){
//     if(a%2 == 0){
//         // return `${a} is a Even number`;
//         return (a)+" is a Even number";
//     }
//     else{
//         // return `${a} is a Odd number`;
//         return (a)+" is a Odd number";
//     }
// }
// var a = 46;
// var result = odd_even(a);
// console.log(result);

// 2. No return + has parameter 
function odd_even(a){
    if(a%2 == 0){
        console.log(a, "is a Even number");
    }
    else{
        console.log(a, "is a Odd number");
    }
}
var a = 46;
odd_even(a);
