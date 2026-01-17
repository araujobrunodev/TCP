const { clients } = require("../server/listOfClients")

function  broadcast (package) {
  if (typeof clients == "undefined" | clients.length === 0) return;				
  
  const encoded_package = JSON.stringify(package)

  clients.forEach(client => {
    client.send(encoded_package)
	})
}

module.exports = broadcast