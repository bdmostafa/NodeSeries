const questions = ["Whats your name?", "How old are you?"];

const answers = [];

process.stdout.write(questions[0]);
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        process.stdout.write(questions[answers.length])
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    // console.log(answers);
    for (const value of answers){
        console.log(value)
    }
})