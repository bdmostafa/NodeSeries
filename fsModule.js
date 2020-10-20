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


// Remove folder/directory
// If directory is not empty, it can not be removed
// At first have to remove files inside folder

// Synchronus method without callback
// const text = fs.readdirSync(myDirPath);
// console.log(text)

if (fs.existsSync(myDirPath)) {
    fs.readFile(myNewFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err.message)
            return;
        }
        console.log(data)
    })
} else {
    console.log('Directory is already removed')
}


fs.readdir(myDirPath, "utf-8", (err, files) => {
    if (err) {
        console.log(err.message)
        return;
    } for (const file of files) {
        fs.unlinkSync(path.join(__dirname, 'folder', file));
    }
    fs.rmdir(myDirPath, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log('Directory is removed')
    })
})


// Stream - Buffer in practice ==============================
fs.readFile(path.join(__dirname, 'textForStreamBuffer.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message)
    }
    console.log(data)
})

const stream = fs.createReadStream(path.join(__dirname, 'textForStreamBuffer.txt'));
// console.log(stream);
const writeableStream = fs.createWriteStream(path.join(__dirname, 'files', 'sample2.txt'))

stream.on('once', ()=> {
    console.log('strating to reading data');
})
stream.on('data', (chunk) => {
    writeableStream.write(chunk);
    console.log(chunk.toString())
})
