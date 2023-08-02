// write a function called make_avg() which will take an array of integers and the size of the array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        sum = sum + number;
    }
    let averageValue = sum / numbers.length;
    return averageValue;
}

let numbers = [12, 23, 13, 20, 30];
let avgNumber = make_avg(numbers)
console.log("The average number of array is: ", avgNumber);

