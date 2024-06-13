const Node = {
  "id": "9868b761cd9c9812",
  "type": "debug",
  "z": "812b69015d6703b6",
  "g": "c027fd1f6d351463",
  "name": "Mail out",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"from\": from,\t    \"to\": to,\t    \"topic\": topic,\t    \"isSent\": error ~> $exists() ? false : true,\t    \"error\": error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 490,
  "y": 260,
  "wires": []
}

module.exports = Node;