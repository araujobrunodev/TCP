const net = require("net")

const Connect = (ip,port) => {
    let socket = new net.Socket()

    socket.connect(port,ip,() => {
        console.log("every thing is okay")
    })
}

module.exports = {Connect}