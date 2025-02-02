// Task 1: Product Price Management 
let prices = [ 12.99, 5.99, 14.99, 10.49, 5.99]// Array Prices 
prices.push(9.99); // Add new price to the end of array
prices.shift();//Remove the first price from the array
console.log("Updated Price List:)",prices); // Display the updates array of prices

// Task 2 : Modifying customer order Scenario 
let orders = [31.97,53.96,46.46,58.94,22.47,30.37];// array orders 
orders[2] += 5; // Adding to the third order by 5 
let totalOrders = orders.reduce((total,order) => total + order, 0);// Calculating the Total of all orders
console.log("Updated Orders: " ,orders);// Display the updates array of ordes
console.log("Total number of orders:",totalOrders); //Display the toal of all orders

//Task 3 : Employee Performance Tracking 
let employee = {
name:"Yazmin Hues",
role:"Creative Director"
performanceScore: 80,
isActive:true
} ; // Obeject employye
employee.performancescore=95; //Updating the Performance Score 
employee.promotionEliagible=true // 
console.log("Update employee Details:",employee);// display the updated employee object


    
