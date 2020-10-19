process.stdout.write('Hello \n');
process.stdout.write('world');

// event listen
process.stdin.on('data', data => {

    console.log(data); // show buffer data (temporary)

    if (data
        .toString()
        .trim()
        .toLowerCase() == 'exit'
    ) {
        process.exit();
    } else {
        console.log(data.toString()); // output exact data
    }
});

process.on('exit', () => {
    console.log('You are existing App');
})