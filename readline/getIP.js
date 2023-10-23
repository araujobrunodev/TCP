const {networkInterfaces} = require("os")

function GetIP () {
    let Wifi = networkInterfaces()["Wi-Fi"]
    let result = ""

    for (let count = 0; count < Wifi;count++) {
        if (Wifi[count].family == "IPv4") {
            return result = Wifi[count].address
        }
    }

    return result
}

module.exports = {GetIP}