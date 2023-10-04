const net = require("net")
const {send} = require("../tools/send")

const Connect = (ip,port) => {
    let socket = new net.Socket()

    socket.connect(port,ip,() => {
        console.log("\nwas connected\n")
        send(socket)
    })
}

module.exports = {Connect}