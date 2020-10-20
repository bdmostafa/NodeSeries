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