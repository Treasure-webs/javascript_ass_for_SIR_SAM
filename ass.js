//NUMBER 1
function welcome(){
    console.log("Welcome to JavaScript class");
}
welcome();
welcome();

//NUMER 2
function greetings(name){
    console.log("Welcome ", name);
}
let your_name = "Ada"
greetings(your_name);

//NUMBER 3
function calculateTotal(price, quantity){
    return price * quantity;
}
let prices = 1500;
let quantity = 4;
console.log("The total price is: ", calculateTotal( prices, quantity));

//NUMBER 4
function calculateArea(width, height){
    return width * height;
}
let width = 10;
let height = 6;
console.log("The area is: ", calculateArea(width, height));

//NUMBER 5 
function checkResult(score){
    if(score >= 50){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
let score = 37;
let result = checkResult(score);
console.log(result);

//NUMBER 6
function gradeStudent(score){
    if(score >= 70){
    return "A";
    }
    else if(score >= 60 && score <= 69){
        return "B";
    }
    else if(score >= 50 && score <= 59){
        return "C";
    }
    else{
        return "Fail";
    }
}
let score2 = 67;
console.log(gradeStudent(score2));

//NUMBER 7
function withdraw(balance, amount){
    if(balance < amount){
        return "Insufficient funds";
    }
    else if(balance > amount){
        return  (balance - amount);
    }
    else if(balance === amount){
        return  (balance - amount);
    }
    else{
        return "Unkown value";
    }
}
let balance = 50000;
let amount = 50000;
console.log("Your new balance is: ", withdraw(balance, amount));

//NUMBER 8
function greet(friend){
    return console.log("Hello ", friend)
}
let friend_name = "sammi";
greet(friend_name);

//NUMBER 9
const prices3 = [2500, 4000, 1500];
function calculateCartTotal(prices){
    let total = 0;
    for(let i = 0; i < prices3.length; i++){
        console.log(prices3[i])
        total += prices3[i]
    }
    console.log("Total is: ", total);
}
calculateCartTotal(prices3)

//NUMBER 10
function multiply(a , b){
    return a * b
}
let a = 4;
let b = 3;
console.log(a, " * ",b, " = ", multiply(a, b))