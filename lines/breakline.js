let {listOfLines} = require("./list")

const canBreakline = () => {
    if (listOfLines[listOfLines.length - 1] == true) return true
    else return false
}

module.exports = {canBreakline}