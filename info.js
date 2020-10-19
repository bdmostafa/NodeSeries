// Node OS module
const os = require('os');

console.log(os.freemem());
console.log(os.userInfo().username);
console.log(os.userInfo().homedir);
console.log(os.hostname());
console.log(os.platform());



// Node path module
const path = require('path');

console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(__dirname + '/path/text.js');

// for cross platform performance, path module is used
console.log(path.join(__dirname, 'path', 'text.js'));
console.log(path.normalize('.///path//text.js'));
