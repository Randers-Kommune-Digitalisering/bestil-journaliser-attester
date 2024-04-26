const Node = {
  "id": "45a7f0406a6a014a",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "stdout",
  "active": false,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"bestillinger\": payload.warningCount > 0 ? \"\" : \"Bestilling indsat i tabel\",\t    \"success\": error ~> $exists() ? false : true,\t    \"data\": bestilling\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 840,
  "y": 1200,
  "wires": []
}

module.exports = Node;