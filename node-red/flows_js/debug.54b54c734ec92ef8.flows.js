const Node = {
  "id": "54b54c734ec92ef8",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    \"cpr\": \"Navn opdatering succesfuld\",\t    \"rekvisitus\": {\t        \"cpr\": (rekvisition.cpr ~> $substring(0, 6)) & \"-XXXX\",\t        \"navn\": rekvisitusNavn,\t        \"ordersUpdated\": payload.affectedRows\t    }\t}\t:\t{\t    \"cpr\": \"Fejl ved opdatering af navn\",\t    \"rekvisitus\": {\t        \"cpr\": (rekvisition.cpr ~> $substring(0, 6)) & \"-XXXX\",\t        \"navn\": rekvisitusNavn,\t        \"ordersUpdated\": payload.affectedRows\t    },\t    \"message\": error.message,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 780,
  "y": 1580,
  "wires": []
}

module.exports = Node;