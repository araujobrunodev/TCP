const { rl } = require("./rl")
const net = require("net")
const { GetIP } = require("./getIP")
const { createServer } = require("../server/create")
let local = {
    ip: "",
    port: ""
}

const defineLocalization = () => {
    console.log("=======================================")
    console.log("insert info below to create a server\n")

    rl.question("Set the IP(y/n): ", (response) => {
        switch (response) {
            case "y":
                defineIP()
                break;

            case "Y":
                defineIP()
                break;
                
            case "yes":
                defineIP()
                break;
                
            case "YES":
                defineIP()
                break;

            case "n":
                local.ip = GetIP()
                definePort()
                break;

            case "N":
                local.ip = GetIP()
                definePort()
                break;

            case "no":
                local.ip = GetIP()
                definePort()
                break;

            case "NO":
                local.ip = GetIP()
                definePort()
                break;
                
            default:
                defineLocalization()
                break;
        }
    })
}

function defineIP() {
    rl.question("IP: ", (localization) => {
        if (localization == "localhost" || net.isIP(localization) != 0) {
            local.ip = localization
            definePort()
        } else
            return defineIP()
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