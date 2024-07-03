const Node = {
  "id": "b474f11560c328eb",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "bestilling.rekvirentEmail ~> $exists() ?\t{\t    \"sd\": \"Navn hentning succesfuld\",\t    \"rekvisitus\": bestilling.rekvisitusNavn\t}\t:\t{\t    \"sd\": \"Fejl ved navn hentning\",\t    \"message\": error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 740,
  "y": 1060,
  "wires": []
}

module.exports = Node;