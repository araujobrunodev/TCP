const net = require("net")
const {send} = require("../tools/send")
const {receive} = require("../tools/receive")
const {leave} = require("./clientLeave")

const createServer = (ip,port) => {
    net.createServer((socket) => {
        console.log("client was connected\n")
        send(socket)
        receive(socket)
        leave(socket)
        
    }).listen(port,ip, () => {
        console.clear()
        console.log("========================")
        console.log(`     IP: ${ip}         `)
        console.log(`      Port: ${port}       `)
        console.log("========================")
        console.log("   server was created  ")
        console.log("========================\n")
    })
}

module.exports =  {createServer}