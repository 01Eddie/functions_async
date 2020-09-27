const { tasksOne, tasksTwo } = require('./tasks');
//Esto aparte de lo explicado es un codigo paralelismo donde queremos que funcione a la vez el elemento invocado
//await es para que tome un tiempo de ejecucion
async function main() {
try {
    console.time('Measuring time');
    const results = await Promise.all([tasksOne(), tasksTwo()])
    
    console.timeEnd('Measuring time');

    console.log('Tasks One returned',results[0]);
    console.log('Tasks Two returned',results[1]);
} catch (e) {
    console.log(e)
}
}

main();

