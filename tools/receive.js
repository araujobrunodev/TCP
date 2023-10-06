const {canBreakline} = require("../lines/breakline")
let {listOfLines} = require("../lines/list")

const receive = (socket) => {
    socket.on("data",(data) => {
        let line = `received: ${data.toString("utf8")}`
        
        if (canBreakline()) console.log(`\n${line}`)
        else console.log(line)

        listOfLines.push(false)
    })
}

module.exports = {receive}