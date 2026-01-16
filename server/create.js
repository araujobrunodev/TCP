const net = require("net")
const { send } = require("../tools/send")
const { receive } = require("../tools/receive")
const { leave } = require("./clientLeave")
let = {clients} = require("./listOfClients")

const createServer = (ip, port) => {
    net.createServer((socket) => {
        console.log("client was connected\n")
        send("mainMessage")
        receive(socket, "server")
        leave(socket)

        clients.push({
            IP: ip,
            Port: port,
            Socket: socket,
            send(arg) { this.Socket.write(arg) }
        })

    }).listen(port, ip, () => {
        console.clear()
        console.log("========================")
        console.log(`     IP: ${ip}         `)
        console.log(`      Port: ${port}       `)
        console.log("========================")
        console.log("   server was created  ")
        console.log("========================\n")
    })
}

module.exports = { createServer }