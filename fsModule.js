const fs = require('fs');
const path = require('path');

const myFilePath = path.join(__dirname, 'files', './sample.txt')
const myNewFilePath = path.join(__dirname, 'files', './sample2.txt')

const myDirPath = path.join(__dirname, 'folder')
const myFolderPath = path.join(__dirname, 'folder', './sample.txt')

if (fs.existsSync(myFilePath)) {
    // Append new text on current file
    fs.appendFileSync(myFilePath, 'This is next text.\n')
    console.log('Data is written in the file');
} else {
    // Create file
    fs.writeFileSync(myFilePath, 'Welcome to Sample FS.\n');
}

// Delete file
if (fs.existsSync(myFilePath)) {
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


// Create folder/directory
if (fs.existsSync(myDirPath)) {
    console.log('Directory is already exist')
} else {
    fs.mkdir(myDirPath, {}, () => {
        if (fs.existsSync(myFolderPath)) {
            // Append new text on current file
            fs.appendFileSync(myFolderPath, 'This is next text.\n')
            console.log('Data is written in the file');
        } else {
            // Create file
            fs.writeFileSync(myFolderPath, 'Welcome to the file in folder.\n');
        }
        console.log('Directory is created')
    })
}
