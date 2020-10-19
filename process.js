// console.log(process.argv);
console.log('Type your first name, last name, age and status');

function grabVal(key) {
    const idx = process.argv.indexOf(key);
    return idx !== -1 
    ? process.argv[idx + 1]
    : null;
}

const firstName = grabVal('--firstName');
const lastName = grabVal('--lastName');
const age = grabVal('--age');
const status = grabVal('--status');


if (!firstName || !lastName || !age || !status) {
    console.log('Please provide necessary information');
} else {
    console.log(`Your name is ${firstName} ${lastName}. You are ${age} and your status is ${status}`)
}
