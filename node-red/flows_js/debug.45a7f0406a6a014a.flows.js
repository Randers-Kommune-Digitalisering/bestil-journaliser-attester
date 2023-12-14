const Node = {
  "id": "45a7f0406a6a014a",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"bestillinger\": payload.warningCount > 0 ? \"Tabel eksisterer\" : \"Bestilling indsat i tabel\",\t    \"success\": error ~> $exists() ? false : true\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 760,
  "y": 520,
  "wires": [],
  "_order": 81
}

module.exports = Node;