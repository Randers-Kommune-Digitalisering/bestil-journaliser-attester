const Node = {
  "id": "024c6c984ea1d366",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "bestilling.rekvirentEmail ~> $exists() ?\t{\t    \"azure\": \"Mail hentning succesfuld\",\t    \"rekvirent\": {\t        \"dq\": bestilling.rekvirentDQ,\t        \"navn\": bestilling.rekvirentNavn,\t        \"mail\": bestilling.rekvirentEmail\t    }\t}\t:\t{\t    \"azure\": \"Fejl ved mail hentning\",\t    \"rekvirent\": {\t        \"dq\": bestilling.rekvirentDQ,\t        \"navn\": bestilling.rekvirentNavn\t    },\t    \"message\": error.message,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 2580,
  "y": 1180,
  "wires": []
}

module.exports = Node;