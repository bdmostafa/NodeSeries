const fs = require('fs');
const path = require('path');

const myFilePath = path.join(__dirname, 'files', './sample.txt')
const myNewFilePath = path.join(__dirname, 'files', './sample2.txt')
const myDirPath = path.join(__dirname, 'files')

if (fs.existsSync(myFilePath)) {
    // Append new text on current file
    fs.appendFileSync(myFilePath, 'This is next text.\n')
    console.log('Data is written in the file');
} else {
    // Create file
    fs.writeFileSync(myFilePath, 'Welcome to Sample FS.\n');
}

// Delete file
if(fs.existsSync(myFilePath)){
    fs.unlink(myFilePath, () => {
        console.log('File is deleted successfully')
    })
} else {
    console.log('File is already removed')
}

// Rename file
fs.rename(myFilePath, myNewFilePath, () => {
    console.log('File is renamed')
})