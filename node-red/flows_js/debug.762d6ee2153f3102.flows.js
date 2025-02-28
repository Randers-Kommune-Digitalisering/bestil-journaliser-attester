const Node = {
  "id": "762d6ee2153f3102",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sbsys\": \"attest journaliseret\",\t    \"sagsnummer\": sagsnummer,\t    \"cpr\": (rekvisitus ~> $split(\"-\"))[0] & \"-XXXX\",\t    \"error\": error ~> $exists() ? error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1660,
  "y": 2960,
  "wires": []
}

module.exports = Node;