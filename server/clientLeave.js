const leave = (socket) => {
    socket.on("close", (msg) => {
        console.log("client leave")
    })
}

module.exports = {leave}