const net = require('net')

//server
const server =net.createServer(function(soket){
    soket.end('my new message is here')

})

//node event -> error

server.on('error',(err)=>{
    if(err) console.log(err)
})

server.listen(()=>{
    let address = server.address()
    console.log('server port %j',address)
})