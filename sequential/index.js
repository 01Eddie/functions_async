const { tasksOne, tasksTwo } = require('./tasks');

async function main() {
try {
    console.time('Measuring time');
const valueOne = await tasksOne();
const valueTwo = await tasksTwo();
console.timeEnd('Measuring time');

console.log('Tasks One returned',valueOne);
console.log('Tasks Two returned',valueTwo);
} catch (e) {
    console.log(e)
}
}
//Esto aparte de lo explicado es un codigo secuencial
main();

