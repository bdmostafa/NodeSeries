// throw new Error('some error');

console.log(__filename);
console.log(__dirname);

// console.log(global);
// console.log(process);

let greet = 'Hi';

function sayHi(name) {
    console.log("welcome " + name);
}

// module.exports = {
//     greet,
//     sayHi
// }

module.exports = sayHi;