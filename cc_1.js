//TASK 1: VARIABLES - RECORDING EMPLOYEE INFORMATION

//Create variable to save employee's name as a string
let employeeName = "Employee's Name"

//Create immutable variable to save employee's ID
const employeeID = 16800

//Create boolean to verify employee's employment status
var isActive = true

//Logging each variable's values and data type to the console
console.log("Employee Name:", employeeName, "- Type:", typeof employeeName)
console.log("Employee ID:", employeeID, "- Type:", typeof employeeID)
console.log("Employment Status:", isActive, "- Type:", typeof isActive)

//TASK 2: PRIMITIVE DATA TYPES - MANAGING PRODUCT DETAILS

//Create variable to save product's name as string
let productName = "Product Name"

//Create immutable variable to record product price
const productPrice = 8888

//Create boolean to indicate product availability
var isAvailable = false

//Logging each variable's value and data type to the console
console.log("Product Name:", productName, "- Type:", typeof productName)
console.log("Product Price: $" + productPrice, "- Type:", typeof productPrice)
console.log("Product Availability:", isAvailable, "- Type:", typeof isAvailable)

//TASK 3: NUMBER DATA TYPE - FINANCIAL TRANSACTIONS

//Create variable to record intial balance
let accountBalance = 13578
console.log("Initial Account Balance: $" + accountBalance)

//Deposit: $4000 Scholarship Disbursed
accountBalance += 4000
console.log("Account Balance After Deposit: $" + accountBalance)

//Withdrawal: $900 Rent Payment
accountBalance -= 900
console.log("Account Balance After Payment: $" + accountBalance)

//Interest: Monthly Interest Payment
accountBalance *= 1.04
console.log("Account Balance After Interest (4%): $" + accountBalance)

//Division: Got Divorced (50/50 split)
accountBalance /= 2
console.log("Account Balance After Divorce: $" + accountBalance)

//TASK 4: STRING DATA TYPE - GENERATING PERSONALIZED CUSTOMER MESSAGES

//Create variable to store customer's name as a string
let customerName = "Customer Name"

//Logging personalized greeting to the console
console.log("Hi " + customerName + "! Welcome to our store.")


