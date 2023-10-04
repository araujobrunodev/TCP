const net = require("net")
const {send} = require("../tools/send")
const {receive} = require("../tools/receive")

const Connect = (ip,port) => {
    let socket = new net.Socket()

    socket.connect(port,ip,() => {
        console.log("\nwas connected\n")
        send(socket)
        receive(socket)
    })
}

module.exports = {Connect}