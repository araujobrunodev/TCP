const receive = (socket) => {
    socket.on("data",(data) => {
        console.log(`\nreceived: ${data.toString("utf8")}`)
    })
}

module.exports = {receive}