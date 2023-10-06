const {rl} = require("../readline/rl")
const {close} = require("./close")
let {listOfLines} = require("../lines/list")

const send = (socket) => {
    rl.question("message: ", (msg) => {
        listOfLines.push(true)
        socket.write(msg)
        send(socket)
        close(socket,msg)
    })
}

module.exports = {send}