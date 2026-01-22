const {canBreakline} = require("../lines/breakline")
const broadcast = require("../tools/broadcast")
let {listOfLines} = require("../lines/list")

const receive = (socket, isServer) => {
    try {
        socket.on("data",(data) => {
            if (isServer == "server") broadcast(JSON.parse(data));

            const package = JSON.parse(data.toString())
            let line = `received: ${package.msg}`

            if (canBreakline()) console.log(`\n${line}`)
            else console.log(line)

            listOfLines.push(false)
        })
    } catch (err) {
        throw err;
    }
}

module.exports = {receive}