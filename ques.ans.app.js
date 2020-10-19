const questions = ["Whats your name?", "How old are you?", "Have you finished your graduation?", "Do you have any job?", "Are you happy now?"];

// const answers = [];

// process.stdout.write(questions[0]);
// process.stdin.on('data', data => {
//     answers.push(data.toString().trim())
//     if(answers.length < questions.length) {
//         process.stdout.write(questions[answers.length])
//     } else {
//         process.exit();
//     }
// });

// process.on('exit', () => {
//     // console.log(answers);
//     for (const value of answers){
//         console.log(value)
//     }
// })


// the previous application using readline module =================================
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const answers = [];

rl.question(questions[0], data => {
    
    // Push first answer data
    answers.push(data);

    if(answers.length < questions.length) {
        rl.setPrompt(questions[answers.length]);
        rl.prompt();

        // Listen data on readline
        rl.on('line', data => {
            if(data.trim().toLowerCase() === 'exit') {
                rl.close();
                return;
            }
            rl.setPrompt('Are you sure to leave (Write EXIT to leave)?');
            rl.prompt();
            
            // push all data
            answers.push(data);
        })
    }
})

rl.on('close', ()=> {
    console.log(`You are existing the app and your answers are ${answers}`)
})