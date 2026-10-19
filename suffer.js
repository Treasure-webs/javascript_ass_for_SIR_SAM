// NUMBER 1
let temperature = 0;
if (temperature > 30){
    console.log("Hot wheather");
}
else if(temperature < 30){
    console.log("Cold weather");
}
else{
    console.log("Unknown value");
}

//NUMBER 2
let score = 85;
if(score >= 70){
    console.log("Excellent");
}
else if(score >= 50 && score <=69){
    console.log("Pass");
}
else if(score < 50){
    console.log("Fail");
}
else{
    console.log("Unknown value");
}

//NUMBER 3
let username = "student";
let password = "12345";
if(username === "student" && password === "1234"){
    console.log("Correct username and password");
    console.log("Logging in...");
    console.log("Login successful");
}
else if(username === "student" && password !== "1234"){
    console.log("Incorrect password");
    console.log("Login failed");
}
else if(username !== "student" && password === "1234"){
    console.log("Incorrect username");
    console.log("Login failed");
}
else{
    console.log("Incorrect username and password");
    console.log("Login failed");
}

//NUMBER 4
let number = -4;
if(number > 0){
    console.log("Positive number");
}
else if(number < 0){
    console.log("Negative number");
}
else if (number === 0){
    console.log("Zero");
}
else{
    console.log("Unknown value");
}

//NUMBER 5
let startnum = -5;
let endnum = 15;
for(let i = startnum; i <= endnum; i++){
    console.log(i);
}

//NUMBER 6
let startnum2 = 1;
let endnum2 = 10;
for(let i = startnum2; i <= endnum2; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//NUMBER 7
let countstart = 10;
let countend = 4;
while(countstart >= countend){
    console.log(countstart);
    countstart--;
}

//NUMBER 8
let maxtank = 50;
let current = 0;
let add = 10;
while(current <= maxtank){
    console.log(current);
    current += add;
}

//NUMBER 9
let value = 1;
if(value >= 1 && value <= 10){
    console.log("Small number")
}
else if(value >= 11 && value <= 20){
    console.log("Medium number")
}
else if (value >20){
    console.log("Large number")
}
else if(value <= 0){
    console.log("Invalid number")
}

//NUMBER 10
let start2 = 1;
let end2 = 20;
for(let i = start2; i <= end2; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//NUMBER 11
let itemprice = 8500;
let money = 15000;
if(money > itemprice){
    console.log("balance: " + (money - itemprice));
}
else if(money < itemprice){
    console.log("Insufficient funds");
    console.log("the item price is: " + itemprice + " and your balance is: " + money);
}
else if(money === itemprice){
    console.log("You have just enough money to buy the item" + "your balance is: " + (money - itemprice));
}
else{
    console.log("Unknown value");
}

//NUMBER 12
let hourworked = 10;
let hourlyrate = 2000;
let overtimerate = 3000;
let normalhours = 8;
if(hourworked === normalhours){
    console.log("Your salary is: " + (hourworked * hourlyrate));
}
else if(hourworked > normalhours){
    let overtimehours = hourworked - normalhours;
    let salary = (normalhours * hourlyrate) + (overtimehours * overtimerate);
    console.log("Your salary is: " + salary);
}

//NUMBER 13
let total = 30000;
let discount = 15;
let discount2 = 5;
if(total >= 30000){
    let discountedprice = total - (total * discount / 100);
    console.log("Your discounted price is: " + discountedprice);
}
else if(total < 30000){
    let discountedprice2 = total - (total * discount2 / 100);
    console.log("Your discounted price is: " + discountedprice2);
}
else{
    console.log("Unknown value");
}

//NUMBER 14
let score1 = 65;
let score2 = 48;
let score3 = 73;
let average = (score1 + score2 + score3) / 3;
if(average >= 50){
    console.log("Passed with an average score of: " + average);
}
else if(average < 50){
    console.log("Failed with an average score of: " + average);
}
else{
    console.log("Unknown value");
}

//NUMBER 15
let savings = 0;
let rateeveryweek = 2000;
let startweek = 1;
let endweek = 10;
while(startweek <= endweek){
    savings += rateeveryweek;
    console.log("Week " + startweek + ": Savings = " + savings);
    startweek++;
}