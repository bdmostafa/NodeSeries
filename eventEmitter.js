const EventEmitter = require('events').EventEmitter;

const myEvents = new EventEmitter();

// Must be in order .on(first) -> .emit(second)
const greetings = () => {
    myEvents.on('greet', function(data) {
        console.log(data)
    });
    console.log('Listening to event greet')
}
greetings();

myEvents.emit('greet', 'Hello Mostafa')



// Using class based architecture
class Greetings extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    greet(){
        this.on('greet', data => {
            console.log(`${data} ${this.name}`);
        });
    }
}


const myGreetings = new Greetings('Mostafa');

myGreetings.greet();

myGreetings.emit('greet', 'Hi')