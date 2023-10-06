const {rl} = require("../readline/rl")

const close = (socket,msg) => {
    if (msg.match(/CLOSE/ig)) {
        socket.destroy()
        rl.close()
        process.exit(0)
    }
}

module.exports = {close}