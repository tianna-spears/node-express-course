 const EventEmitter= require('events')
 const customEmitter= new EventEmitter;

 customEmitter.on('response', () => {
    console.log('Hello! What is your name?')
 })

 customEmitter.emit('response');