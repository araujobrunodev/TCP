const rl =  require("./rl")
let local = {
    ip:"",
    port:""
}

const defineLocalization = () => {
    rl.question("localization: ", (localization) => {
        if (localization.length == 0 || localization == " ") return defineLocalization()
        local.ip = localization
        definePort()
    })
}

const definePort = () => {
    rl.question("port: ",(port) => {
        if (port.length == 0 || port == " ") return definePort()
        local.port = port
    })
}