const Node = {
  "id": "9868b761cd9c9812",
  "type": "debug",
  "z": "812b69015d6703b6",
  "name": "Mail afsendt",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"mail\": topic,\t    \"modtager\": to,\t    \"afsendt\": error ~> $exists() ? false : true\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1140,
  "y": 120,
  "wires": []
}

module.exports = Node;