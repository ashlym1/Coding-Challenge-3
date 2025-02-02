console.log(" JavaScript file is loaded and running!");
// Task 1: Product Price Management 
let prices = [ 12.99, 5.99, 14.99, 10.49, 5.99]// Array Prices 
prices.push(9.99); // Add new price to the end of array
prices.shift();//Remove the first price from the array
console.log("Updated Price List:",prices); // Display the updates array of prices

// Task 2 : Modifying customer order Scenario 
let orders = [31.97,53.96,46.46,58.94,22.47,30.37];// array orders 
orders[2] += 5; // Adding to the third order by 5 
let totalOrders = orders.reduce((total,order) => total + order, 0);// Calculating the Total of all orders
console.log("Updated Orders: " ,orders);// Display the updates array of ordes
console.log("Total number of orders:",totalOrders); //Display the toal of all orders

//Task 3 : Employee Performance Tracking 
let employee = {
name:"Yazmin Hues",
role:"Creative Director",
performanceScore: 80,
isActive:true
} ; // Obeject employye
employee.performancescore=95; //Updating the Performance Score 
employee.promotionEligible=true // 
console.log("Update employee Details:",employee);// display the updated employee object

//Task 4: Customer FeedBack Records
let feedback =[ 
    {customerName:"Lili", feedbackText:"The Matcha is amazing quality and makes great Matcha Lattes, would definetly buy again!", rating: 10},
    {customerName:"Jaded", feedbackText:" The green tea and strawberry wafer cookies were delicious! Great with cofee/tea, sadly they got rid of the strawberry wafer cookies, please bring them back", rating:8},
    {customerName:"Hera",feedbackText:"All the products are great, but they got rid of the strawberry cookies for strawberry matcha and it's not what i expected, disappointed",rating:6},
]; // Adding Feed Back Array list
feedback.push({ customerName: "Miffy",feedbackText:"The matcha spread is so good, goes well with everything, it's my favorite !", rating: 7});
// Add  new customer feedback to the array list to the end of the array list
console.log("Updated feedbacks:",feedback) // Display the  updated array feedbacks 

// Task 5: Inventory Management System
let inventory= {
    itemName:"Ceremonial Matcha Powder",
    stockCount:100,// Adjust the stock count 
    price:10.49,
calculateTotalValue: function(){
    return this.stockCount*this.price;} 
};//Calculating the total value 
console.log("Inventory Details:",inventory);
console.log("Total Inventory Value",inventory.calculateTotalValue());// display the inventory details 
