const net = require("net")

const createServer = (ip,port) => {
    net.createServer((socket) => {
        
    }).listen(port,ip, () => {
        console.log("server was created")
    })
}

module.exports =  {createServer}