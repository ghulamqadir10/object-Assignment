// Question 1
console.log(`question 1`)
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

// simple Method

// var each_prod1 = (itemsArray[0].price * itemsArray[0].quantity)
// console.log(` juice price is ${itemsArray[0].price} and quantity is ${itemsArray[0].quantity} = ${each_prod1}`)
// var each_prod2 = (itemsArray[1].price * itemsArray[1].quantity)
// console.log(` cookie price is ${itemsArray[1].price} and quantity is ${itemsArray[1].quantity} = ${each_prod2}`)
// var each_prod3 = (itemsArray[2].price * itemsArray[2].quantity)
// console.log(` shirt price is ${itemsArray[2].price} and quantity is ${itemsArray[2].quantity} = ${each_prod3}`)
// var each_prod4 = (itemsArray[3].price * itemsArray[3].quantity)
// console.log(` pen price is ${itemsArray[3].price} and quantity is ${itemsArray[3].quantity} = ${each_prod4}`)


// var total_price_all_products = each_prod1 + each_prod2 + each_prod3 + each_prod4
// console.log(`Total price of all products is ${total_price_all_products} `)
itemsArray.forEach(item => {
    item.totalprice = item.price * item.quantity;
})
var sum = 0;
itemsArray.forEach(item => {
    sum += item.totalprice
})
itemsArray.forEach(item => {
    console.log(`${item.name}: ${item.totalprice}`)
})
console.log(`total price of all items is ${sum}`)


// Question 2
console.log(`question 2`)
let candidate = {
    name: `Akasha`,
    email: `Akasha@gmail.com`,
    password: `something`,
    age: `20`,
    gender: `Male`,
    city: `karachi`,
    country: `Pakistan`,
}

console.log(`age in object is`, `age` in candidate)
console.log(`country in object is`, `country` in candidate)
console.log(`firstName in object is`, `firstName` in candidate)
console.log(`lastName in object is`, `lastName` in candidate)



// Question 3
console.log(`question 3`)
// Constrctive function

function Student(firstName, lastName, age, city, country) {  //constructive func ma function ka name ma capital letter aata hai and parameters dena zaroori hai for change in new records
    this.firstName = firstName;     //setting properties
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.getFullName = function () {
        return `full name: ${this.firstName} ${this.lastName} age: ${age} city: ${city} country: ${country}`
    };
}
var student1 = new Student(`akash`, `ahmed`, `20`, `karachi`, `pakistan`)
var student2 = new Student(`zubair`, `makhddom`, `21`, `Vilnius`, `lithuania`)
var student3 = new Student(`sumair`, `bulledi`, `22`, `milano`, `italy`)
var student4 = new Student(`nadir`, `bashir`, `23`, `london`, `uk`)
console.log(student1.getFullName())
console.log(student2.getFullName())
console.log(student3.getFullName())
console.log(student4.getFullName())


// Question 4
console.log(`Question no 4`)
// Another constructor function

let records = []
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function addRecords() {
    var name = document.getElementById(`name`).value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById(`Address`).value;
    var education = document.getElementById(`education`).value;
    var profession = document.getElementById(`profession`).value
    // console.log(name)
    console.log(gender)
    console.log(address);
    // console.log(education)
    // console.log(profession)\

    let person = new Person(name, gender, address, education, profession)
    records.push(person)

    //save records in local storage
    localStorage.setItem("record", JSON.stringify(records));
}

function displayRecords() {
    displayRecord = ""
    for (var i = 0; i < records.length; i++) {
        displayRecord += `<div id="newDiv">
        <h1>Records</h1>
        <h3 >Name: ${records[i].name}</h3>
        <h3>gender: ${records[i].gender} </h3>
        <h3>address: ${records[i].address}</h3>
        <h3>education: ${records[i].education} </h3>
        <h3> profession: ${records[i].profession}</h3>
        </div>`
    }
    document.body.innerHTML+=displayRecord;   
}


