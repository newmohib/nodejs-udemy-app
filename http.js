const http=require('http')

//const server= http.createServer();
 const server= http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api') {
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

// server.on('connection',(socket) =>{
//     console.log('New Connection...',socket);
// })


server.listen(3000)
console.log('Listeningt on port 3000..');