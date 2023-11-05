const { rl } = require("../readline/rl")
const { close } = require("./close")
let { clients } = require("../server/listOfClients")
let { listOfLines } = require("../lines/list")

const send = (something) => {
	
	listOfLines.push(true)
	if (typeof clients == "undefined") console.log("clients is undefined");
	rl.question("message: ", (msg) => {
		switch (msg.length) {
			case 0:
				console.log("There's no message to be send\n")
				break;
	
			default:
				if (something !== "mainMessage") {
					let socket = something
					
					socket.write(msg)
					close(socket, msg)
				} else {
					if (typeof clients == "undefined" | clients.length === 0) return;
					clients.forEach(client => {
						client.send(msg)
					})
				}
				break;
		}
		listOfLines.push(true)
		send(something)
	})
}

module.exports = { send }