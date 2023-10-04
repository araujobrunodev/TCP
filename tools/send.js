const rl = require("../readline/rl")

const send = (socket) => {
    rl.question("message: ", (msg) => {
        socket.write(msg)
        send(socket)
    })
}

module.exports = {send}