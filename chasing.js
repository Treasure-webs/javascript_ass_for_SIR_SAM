//NUMBER 1
const fruits = ["Mango", "Orange", "Banana", "Apple"];
fruits[1] = "Pineapple";
fruits.unshift("Grape");
console.log(fruits);
console.log(fruits.length + "fruits");

//NUMBER 2
const medicines = ["paracetamol", "Vitamin c", "ORS", "Amoxicillin"];
if(medicines.includes("ORS")){
    console.log("ORS available");
}
else{
     console.log("ORS not available");;
}

//NUMBER 3
const queue = ["Ada", "john", "Musa", "Grace"];
queue.push("Peter");
queue.unshift("Mary");
let remove_first_person = queue.shift();
let remove_last_person = queue.pop();
let removed_name = [remove_first_person, remove_last_person];
console.log(queue);
console.log(removed_name);

//NUMBER 4  
const student = ["Ada", "John", "Musa", "Grace", "Peter"];
for(let i = 0; i < student.length; i++){
    console.log(student[i]);
}

//NUMBER 5
const student1 = ["Ada", "John", "Musa", "Grace", "Peter"];
for(let i = 0; i < student1.length; i++){
    console.log((i + 1) +". "+ student1[i]);
}

//NUMBER 6
const products = ["Rice", "Beans", "Oil", "Bread", "Milk"];
for(let i = 0; i < products.length; i++){
    console.log("Product "+ (i + 1)+ " " + products[i]);
}
  console.log("Total product: " + products.length);

//NUMBER 7
const color = ["Red", "Blue", "Green", "Yellow"];
if(color.includes("Green")){
    color[2] = "Purple";
    console.log("Color changed");
}
else {
    console.log("Green was not found");
    console.log(color);
}

//NUMBER 8
const stock = ["Paracetamol", 
               "Vitamin C",
               "ORS",
               "Amoxicillin", 
               "Cough Syrup"];
for(let i = 0; i <stock.length; i++){
    console.log(stock[i])
}
console.log("Total Number of medicine"+ stock.length);
console.log(stock.includes("ORS"));
stock.pop();
stock.push("Ibuprofen");
console.log(stock);