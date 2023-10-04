const net = require("net")
const {send} = require("../tools/send")
const {receive} = require("../tools/receive")

const createServer = (ip,port) => {
    net.createServer((socket) => {
        console.log("client was connected\n")
        send(socket)
        receive(socket)
        
    }).listen(port,ip, () => {
        console.log("\n========================")
        console.log("   server was created  ")
        console.log("========================\n")
    })
}

module.exports =  {createServer}