const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter=new EventEmitter();

// var totalMemory=os.totalmem();
// var freeMemory=os.freemem();
// console.log(`totalMemory: ${totalMemory}`);
// console.log(`freeMemory: ${freeMemory}`);

//fs
// const files=fs.readdirSync('./');
// console.log(files);

// const filesAsync=fs.readdir('./',(err,files)=>{
//     if(err) console.log('Error',err);
//     else console.log(files);
// });

//EventEmitter


//Register a listerner
emitter.on('messageLoged',(arg)=>{
    console.log('Listener Called', arg);

})


const log=require('./logger');
log('message')


//Raise : logging (data:message)


