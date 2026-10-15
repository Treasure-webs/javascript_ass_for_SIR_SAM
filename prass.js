//NUMBER 1
let start1 = 1;
let end1 = 30;
for (let i = start1; i <= end1; i++){
    if(i % 2 === 0){
        console.log(i + " is an even number.");
    }
    else if(i % 2 !== 0){
        console.log(i + " is an odd number.");
    }
    else{
        console.log("invaild input")
    }
}

//NUMBER 2

//NUMBER 5
const numbers = [5 , 10, 15, 20, 25, 30];
for(let number of numbers){
    if(number === 20){
        continue;
    }
    console.log(number);    
}

//NUMBER 6
let balance = 20000;
const withdrawal = 3000;
while (balance >= withdrawal){
    console.log(balance + " - " + withdrawal + " | Remaining balance: " + (balance - withdrawal));
    balance = balance - withdrawal;
}

//NUMBER 9
const start = 3;
const end = 8;
const number2 = 7;
for (let i = start; i <= end; i++){
    console.log(number2 + " x " + i + " = " + (number2 * i));
}