const rl = require("../readline/rl")
const {close} = require("./close")

const send = (socket) => {
    rl.question("message: ", (msg) => {
        socket.write(msg)
        send(socket)
        close(socket,msg)
    })
}

module.exports = {send}