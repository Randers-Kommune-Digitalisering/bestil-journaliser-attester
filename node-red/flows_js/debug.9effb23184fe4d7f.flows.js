const Node = {
  "id": "9effb23184fe4d7f",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "rekvirentEmail ~> $exists() ?\t{\t    \"azure\": \"Mail hentning succesfuld\",\t    \"rekvirent\": {\t        \"dq\": dqUser,\t        \"mail\": rekvirentEmail\t    }\t}\t:\t{\t    \"azure\": \"Fejl ved mail hentning\",\t    \"rekvirent\": {\t        \"dq\": dqUser\t    },\t    \"message\": error.message,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 540,
  "wires": []
}

module.exports = Node;