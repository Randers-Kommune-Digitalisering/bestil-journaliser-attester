const Node = {
  "id": "9868b761cd9c9812",
  "type": "debug",
  "z": "971a7ae6df987a48",
  "name": "Mail afsendt",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"mail\": topic,\t    \"modtager\": to,\t    \"afsendt\": error ~> $exists() ? false : true\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 460,
  "y": 1960,
  "wires": [],
  "_order": 121
}

module.exports = Node;