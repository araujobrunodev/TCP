const rl = require("./rl")
let local = {
    ip:"",
    port:""
}

const Synchronize = () => {
    rl.question("ip: ",(localization) => {
        if (localization.length == 0 || localization == " ") return Synchronize()
        local.ip = localization
        SynchronizePort()
    })
}

const SynchronizePort = () => {
    rl.question("port: ",(port) => {
        if (port.length == 0 || port == " ") return SynchronizePort()
        local.port = port
    })
}

module.exports = {Synchronize}