const { rl } = require("../readline/rl")
const { close } = require("./close")
let { listOfLines } = require("../lines/list")

const send = (socket) => {
	rl.question("message: ", (msg) => {
		switch (msg.length) {
			case 0:
				console.log("There's no message to be send\n")
				break;

			default:
				socket.write(msg)
				close(socket, msg)
				break;
		}
		listOfLines.push(true)
		send(socket)
	})
}

module.exports = { send }