function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 100);
            resolve(num);
        }, 1000);
    });
}

// TODO 1: Call getRandomNumber using .then()
// Write your code here
getRandomNumber()
    .then((num) => {
        console.log(num);
    })



// TODO 2: Call getRandomNumber using async/await
// Write your code here
async function Number() {
    const num = await getRandomNumber();
    console.log(num);
}
Number();



async function delayedGreeting(name) {
    // Your code - use setTimeout wrapped in Promise
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name);
        }, 2000)
    });
}
delayedGreeting('Shashank').then(msg => console.log(msg));
// Should print after 1 second: "Hello Shashank"