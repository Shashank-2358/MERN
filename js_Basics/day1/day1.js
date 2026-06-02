console.log("hello world");
const name = "shashank";


const arr = [1, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const obj = {
    name: "shashank",
    age: 21,
    isStudent: true
}

for (let key in obj) {
    console.log(key);
}
// Understanding .map()
// `.map()` creates a completely NEW array by running a function on every element of the original array.

const numbers = [1, 2, 3, 4];

// Example 1: Multiply every number by 2
const doubledNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log("Original Numbers:", numbers); // [1, 2, 3, 4]
console.log("Doubled Numbers:", doubledNumbers); // [2, 4, 6, 8]

// Example 2: Using map with Arrays of Objects
const users = [
    { name: "shashank", age: 21 },
    { name: "john", age: 25 },
    { name: "jane", age: 22 }
];

// Let's create an array that ONLY has the names
const userNames = users.map(user => user.name);

console.log("User Names:", userNames); // ["shashank", "john", "jane"]
//