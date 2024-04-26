const Node = {
  "id": "45a7f0406a6a014a",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"bestillinger\": payload.warningCount > 0 ? \"Warning when inserting order\" : \"Order successfully inserted\",\t    \"success\": error ~> $exists() ? false : true,\t    \"order\": bestilling\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 840,
  "y": 1200,
  "wires": []
}

module.exports = Node;