const { clients } = require("../server/listOfClients")

function  broadcast (msg) {
    if (typeof clients == "undefined" | clients.length === 0) return;				
    clients.forEach(client => {
		client.send(msg)
	})
}

module.exports = broadcast