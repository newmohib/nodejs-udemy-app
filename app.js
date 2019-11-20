const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

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

const emitter=new EventEmitter();
//Register a listerner
emitter.on('messageLoged',()=>{
    console.log('Listener Called');

})
emitter.emit('messageLoged')


