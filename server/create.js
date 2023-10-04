const net = require("net")

const createServer = (ip,port) => {
    net.createServer((socket) => {
        console.log("client was connected\n")
        
    }).listen(port,ip, () => {
        console.log("\n========================")
        console.log("   server was created  ")
        console.log("========================\n")
    })
}

module.exports =  {createServer}