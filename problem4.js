// write a function called odd_even() which takes an integer value and tells whether this value is even or odd. you need to do it in 4 ways:
// 1. Has return + Has parameter
// 2. No return + has parameter 

//1. odd_even() function has return technique.
function odd_even(){
    var a = 42;
    if(a%2 == 0){
        console.log(a," is a Even number");
    }
    else{
        console.log(a," is a Odd number");
    }
}
odd_even();