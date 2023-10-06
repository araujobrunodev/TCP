const {rl} = require("./rl")
const net = require("net")
const {Connect} = require("../client/create")
let local = {
    ip:"",
    port:""
}

const Synchronize = () => {
    console.log("==============================")
    console.log("insert info below to connect to a server\n")

    rl.question("ip: ",(localization) => {
        if (localization == "localhost" || net.isIP(localization)) {
            local.ip = localization
            SynchronizePort()
        } else 
            return Synchronize()
    })
}

const SynchronizePort = () => {
    rl.question("port: ",(port) => {
        let portToNumber = parseInt(port)
        if (portToNumber.length == 0 ||
            portToNumber > 65536 ||
            typeof portToNumber !== "number" ||
            isNaN(portToNumber)
        ) return SynchronizePort()

        local.port = port
        Connect(local.ip,local.port)
    })
}

module.exports = {Synchronize}