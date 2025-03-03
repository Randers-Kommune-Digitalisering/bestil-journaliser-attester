const Node = {
  "id": "b474f11560c328eb",
  "type": "debug",
  "z": "da7be20cd0c704b6",
  "g": "31e203737d08a57a",
  "name": "stdout (join name)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "rekvisitus.navn ~> $exists() and rekvisitus.navn != null ?\t{\t    \"message\": \"CPR navn hentning succesfuld\",\t    \"rekvisitus\": rekvisitus.navn\t}\t:\t{\t    \"message\": \" CPR navn hentning fejl\",\t    \"error\": error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 520,
  "y": 1140,
  "wires": []
}

module.exports = Node;