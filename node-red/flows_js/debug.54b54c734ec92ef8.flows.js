const Node = {
  "id": "54b54c734ec92ef8",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.affectedRows > 0 ?\t{\t    \"azure\": \"Mail opdatering succesfuld\",\t    \"rekvirent\": {\t        \"dq\": dqUser,\t        \"mail\": rekvirentEmail,\t        \"ordersUpdated\": payload.affectedRows\t    }\t}\t:\t{\t    \"azure\": \"Fejl ved opdatering af mail\",\t    \"rekvirent\": {\t        \"dq\": dqUser,\t        \"mail\": rekvirentEmail\t    },\t    \"message\": error.message,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 780,
  "y": 1300,
  "wires": []
}

module.exports = Node;