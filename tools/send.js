const { rl } = require("../readline/rl")
const { close } = require("./close")
const broadcast = require("../tools/broadcast")
let { clients } = require("../server/listOfClients")
let { listOfLines } = require("../lines/list")

const send = (package) => {
	
	listOfLines.push(true)
	if (typeof clients == "undefined") console.log("clients is undefined");
	rl.question("message: ", (msg) => {
		package.msg = msg

		switch (msg.length) {
			case 0:
				console.log("There's no message to be send\n")
				break;
	
			default:
				if (package.isServer !== true) {
					let socket = package.sender
					
					socket.write(JSON.stringify(package))
					close(socket, msg)
				} else {
					broadcast(package)
				}
				break;
		}
		/* listOfLines.push(true)
		send(something) */
	})
}

module.exports = { send }