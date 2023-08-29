const net = require('net')

const client = net.connect({port : 63545},() =>{
    console.log('conntected to server')
})
 //data event
 client.on("data",(output)=> {
    console.log('output=',output.toString())
 })

 //end event -> to stop the server
 client.on,()=>{
    console.log(`server disconnected`)
 }