const rl = require("./rl")
const {Connect} = require("../client/create")
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
        Connect(local.ip,local.port)
    })
}

module.exports = {Synchronize}