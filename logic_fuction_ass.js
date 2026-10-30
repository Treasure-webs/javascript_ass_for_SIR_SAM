//NUMBER 1
/* console.log(fruits[0]);  Mango (beacause array starts from 0 on ward so 0mis the first)
   console.log(fruits[2]); Banana (beacuse banana is in secound when starting from zero to count)
   console.log(fruits[fruits.length - 1]); Apple (-1 start from the last word)
*/

//NUMBER 2
const names = ["Ada", "John", "Musa"];
/* console.log(names[3]); error (Beasuse it called the var and is printing number 3 AND there is no number three) */

//NUMBER 3
const medicines = ["Paracetamol", "Vitamin C", "ORS"];
medicines[1] = "Ibuprofen";
medicines.push("Amoxicillin");
let store = medicines.shift();
console.log(store);
console.log(medicines);
console.log(medicines.length);

//NUNMBER 4
const items = ["Rice", "Beans"];
items.push("Oil"); 
const removed = items.pop(); 
items.push("Milk");
console.log(removed);  // ["Oil"]
console.log(items.length); // 3
console.log(items); // ["Rice", "Beans", "Milk"]
// THE VALUE MUILK WILL NOT REMOVE BECAUSE THE const removed = items.pop(); WAS NOT AFTER SO IT ONLY AFFECT THE OIL

//NUMBER 5
const students = ["Ada", "John", "Musa", "Grace"];
for(let i = 0; i < students.length; i++){
    console.log(i + 1, " " + students[i]);
}

//NUMBER 6
const scores = [45, 72, 38, 90, 55, 49];
let pass = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] >= 50){
    console.log(scores[i]);
    pass++;
    }
}
console.log(pass, "is the number of people that pass")

//NUMBER 7
const scores2 = [60, 45, 80, 72]; 
let i = 0; 
while (i < scores2.length) {    
    console.log(scores2[i]); 
    i++
} // the i is not adding up, so it keep printing 45 because the i is still less than the total number of scores2

//NUMBER 8
/*
 Check whether ORS exists in a stock list: includes()
 Return the first score that is 50 or above: find()
 Create a new array containing only passing scores: filter()
 Create a new array where every price is increased by 500: map()
 */

 //NUMBER 9
 function calculateTotal(price, quantity) {    
    return price * quantity; 
} 
const answer = calculateTotal(800, 4); 
console.log(answer);
/* What is the output?  3,200
What are the parameters? price and quantity
What are the arguments?  price * quanity
What is the return value? tells the function that price * quantity is part of the function */

//NUMBER 10
function displaySum(a, b) {    
    console.log(a + b); 
} 
const result = displaySum(2, 3); 
console.log(result);
/*What two things will appear in the console?  
Why is the second one undefined?  beacause there is no return to tell the function that (a + b) is part of the fuction
Rewrite only the inside of the function so result becomes 5. change the console.log to return
*/

//NUMBER 11
function checkResult(score){
    if(score >= 50){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
let score = 65;
console.log(checkResult(score));
/* Explain why return is useful here. it is useful here beacuse it tells the function that pass should print when the condition is corret*/

//NUM,BER 12
function ATM (balance, ammount){
    if(ammount > balance){
        return "Insufficient funds";
    }
    else if(ammount === balance){
        return "is your new balance is: "+ (ammount - balance);
    }
    else if(ammount < balance){
        return balance - ammount;
    }
}
let balance = 5000;
let ammount = 5000;
console.log(ATM(balance, ammount));

//NUMBER 13
const prices = [2500, 4000, 1500, 3000];
function calculateCartTotal(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
let array = prices;
console.log(calculateCartTotal(array))
//NUMBER 14
function gradeStudent(score) {    
    if (score >= 50) {        
        return "Pass";    
    }    
    return "Fail"; 
} 
const result2 = gradeStudent(40); 
console.log(result);
/* What does the function print for score 40? It print 40 and undefined 
Why does result not contain the word Fail? it doesnt cantain the word fail beacuse the fail will show only is the condition is corret then it will print fail 
Fix the function so both Pass and Fail are returned properly. firstl put a condition else id then an curly bracies ane change the console.log to return and remove the barakect and leave a space between the "Fail" and the return*/

//NUMBER 15
const stock = [    "Paracetamol",    "Vitamin C",    "ORS",    "Amoxicillin" ];
function checkMedicine(medicineName){
    if(stock.includes(medicineName)){
        return medicineName + " is available";
    }
    else{
        return medicineName + " is not available";
    }
}
let look_medicine = "ORS";
console.log(checkMedicine(look_medicine));