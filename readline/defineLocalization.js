const {rl} = require("./rl")
const net = require("net")
const { createServer } = require("../server/create")
let local = {
    ip: "",
    port: ""
}

const defineLocalization = () => {
    console.log("=======================================")
    console.log("insert info below to create a server\n")

    rl.question("IP: ", (localization) => {
        if (localization == "localhost" || net.isIP(localization) != 0) {
            local.ip = localization
            definePort()
        } else 
            return defineLocalization()
    })
}

const definePort = () => {
    rl.question("Port: ", (port) => {
        let portToNumber = parseInt(port)

        if (portToNumber.length == 0 ||
            portToNumber > 65536 ||
            typeof portToNumber !== "number" ||
            isNaN(portToNumber)) return definePort()

        local.port = portToNumber
        createServer(local.ip, local.port)
    })
}

module.exports = { defineLocalization }