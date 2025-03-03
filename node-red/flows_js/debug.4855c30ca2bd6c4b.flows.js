const Node = {
  "id": "4855c30ca2bd6c4b",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "g": "31e203737d08a57a",
  "name": "stdout (join name)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "rekvisitus.navn ~> $exists() and rekvisitus.navn != null ?\t{\t    \"message\": \"SD navn hentning succesfuld\",\t    \"rekvisitus\": rekvisitus.navn\t}\t:\t{\t    \"message\": \"SD navn hentning fejl\",\t    \"warning\": error ~> $type() = \"string\" ? $replace(error, \"TypeError: \", \"\") : error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 520,
  "y": 1000,
  "wires": []
}

module.exports = Node;