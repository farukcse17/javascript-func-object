// Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(a,b,c){
    let avg = (a+b+c)/3
    let avgValue = avg.toFixed(2);
    // console.log(avgValue);
    return avgValue;
}



// let a = parseInt(prompt("Inter first number: "));
// let b = parseInt(prompt("Inter second number:  "));
// let c = parseInt(prompt("Inter third number:  "));
let a = 10;
let b = 20;
let c = 20;
let result = make_avg(a,b,c);
console.log(result);
