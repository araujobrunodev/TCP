const {canBreakline} = require("../lines/breakline")
const broadcast = require("../tools/broadcast")
let {listOfLines} = require("../lines/list")

const receive = (socket, isServer) => {
    socket.on("data",(data) => {
        if (isServer == "server") broadcast(data);

        let line = `received: ${data.toString("utf8")}`

        if (canBreakline()) console.log(`\n${line}`)
        else console.log(line)

        listOfLines.push(false)
    })
}

module.exports = {receive}