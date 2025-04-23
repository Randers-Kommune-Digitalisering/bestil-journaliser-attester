const Node = {
  "id": "e82742247a89732c",
  "type": "debug",
  "z": "7599a14e87e1d5c4",
  "name": "Advarsel",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "error ~> | $ | { \"rekvisitus\": (rekvisitus ~> $split(\"-\"))[0] & \"-XXXX\" } | ",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1030,
  "y": 280,
  "wires": []
}

module.exports = Node;