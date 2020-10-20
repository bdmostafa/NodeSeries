const fs = require('fs');
const path = require('path');

const myFilePath = path.join(__dirname, './sample.txt')

if (fs.existsSync(myFilePath)) {
    fs.appendFileSync(myFilePath, 'This is next text')
    console.log('Data is written in the file');
} else {
    fs.writeFileSync(myFilePath, 'Welcome to Sample FS.\n');
}

