let age = 20;
if (age >= 18) {
    console.log("Adult");
}
else{
    console.log("Underage");
}

//NUMBER 2
let score = 85;
if (score >= 70) {
    console.log("A");
}
else if (score >=60 && score <=69) {
    console.log("B");
}
else if (score >=50 && score <=59) {
    console.log("C");
}
else if (score <50) {
    console.log("Fail");
}
else {
    console.log("Invalid score");
}

//NUMBER 3
let password = "web123";
if (password === "web123") {
    console.log("Access granted");
}
else {
    console.log("Wrong password");
}

//NUMBER 4
let number = 15;
if (number % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

//NUMBER 5
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "tuesday":
        console.log("Normal day");
        break;
    case "wednesday":
        console.log("Normal day");
        break;
    case "thursday":
        console.log("Normal day");
        break;
    case "friday":
        console.log("Day 5 of the work week");
        break;
    case "sunday":
        console.log("Church day");
    default:
        console.log("Invalid day");
}

//NUMBER 6
let food = "ricen";
switch (food){
    case "rice":
        console.log("Rice = ₦3,000");
    break;
    case "burger":
        console.log("Burger = ₦4,500");
    break;
    case "pizza":
        console.log("Pizza = ₦6,000");
    break;
    default:
        console.log(food + " -- Food not available");
}

//NUMBER 7
for (let i = 1; i <=15; i++){
    console.log(i);
}

//NUMBER 8
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//NUMBER 9
let countdown = 5;
while (countdown >= 0){
    console.log(countdown);
    countdown--;
}
console.log("GO!!!");

//NUMBER 10
let startday = 0;
let endday = 5;
let savings = 500;
while (startday <= endday){
    console.log("day " + startday + "  savings + " + savings + " = " + (startday * savings));
    startday++;
}

//NUMBER 11
let amount = 2000;
if (amount >=20000){
    console.log("discount = 10%");
    console.log("total amount" + (amount - (amount * 0.1)));
}
else{
    console.log("No discount");
    console.log("total amount " + amount);
}

//NUMBER 12
let unit =  100;
if (unit <= 100){
    console.log("price per unit = ₦50");
    console.log("total amount of unit = " + (unit * 50));
}
else if (unit >100){
    console.log("price per unit = ₦80");
    console.log("total amount of unit = " + (unit * 80));
}
else{
    console.log("Invalid unit");
}

//NUMBER 13
let salary = 1000;
if (salary >= 100000){
    console.log("bonus = 10%");
    console.log("total salary = " + (salary + (salary * 0.1)));
}
else if (salary < 100000){
    console.log("bonus = 5%");
    console.log("total salary = " + (salary + (salary * 0.05)));
}
else{
    console.log("Invalid salary");
}

//NUMBER 14
let itemprice = 7500;
let money = 200;
if(money - itemprice === 0){
    console.log("No change");
}
else if(money - itemprice >0){
    console.log("remaing chage = " + (money - itemprice));
}
else if(money - itemprice <0){
    console.log("Not enough money = " + (money - itemprice));
    console.log("your are expected to pay the sum of "+ (itemprice - money) +  " In oder to complet your purchase");
}
else {
    console.log("invalid  input");
}

//NUMBER 15
let score1 = 60;
let score2 = 45;
let score3 = 10;
if((score1 + score2 + score3) / 3 >= 50){
    console.log("Average: " + (score1 + score2 + score3) / 3 + " -- Pass");
}
else if((score1 + score2 + score3) / 3 < 50){
    console.log("Average: " + (score1 + score2 + score3) / 3 + " -- Fail");
}
else{
    console.log("Invalid score");
}