const income = [10000, 20000, 25000, 50000, 5000];
// when did he stated earning herier from 20,000 and aBOVE
let slaryTotal = 0;
for (let i = 0; i <= income.length; i++){
    console.log([i] + " Salary total: " + slaryTotal);
    slaryTotal += income[i]
}
const higherSlary = income.filter(function (income){
    return income >= 20000
});
console.log(higherSlary, "+", "20000 is Month 2  ", "25000 is Month 3  ", "50000 is Month 4  ");

//ARRAY PRACTICE
const food = ["Rice", "Beans", "Garri", "Fufu", "Ijebu Garri"]
console.log(food[0] );
console.log(food[food.length-1]);

const prices = [20000, 30000, 6700, 2345]
prices.push(39000);
console.log(prices);

const name1 = ["treasure", "sammy", "tochi", "chukwu-ebuka"]
name1[1] = "bobo";
console.log(name1);

const score = [56, 78, 25, 98, 40];
let score_higher_the_50 = 0;
for(let i = 0; i < score.length; i++){
    console.log(score[i]);
    if(score[i] >= 50){
        score_higher_the_50++;
    }
}
console.log(score_higher_the_50);

const pharmacy = ["Paracetamol", "ORS", "vitamin c"];
if(pharmacy.includes("ORS")){
    console.log("ORS is avalable");
}
else{
    console.log("ORS is nor avalable");
}

const prices2 = [20000, 30000, 6700, 2345];
let total = 0;
for(let i = 0; i < prices2.length; i++){
    total += prices2[i];
}
console.log("Total price: ", total);

const name2 = ["treasure", "sammy", "tochi", "chukwu-ebuka"];
let remove = name2.shift();
console.log(remove);