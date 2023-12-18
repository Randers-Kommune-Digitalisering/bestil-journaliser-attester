const Node = {
  "id": "cc3158538b77915e",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"bestillinger\": payload.warningCount > 0 ? \"Tabel eksisterer\" : \"Tabel oprettet\",\t    \"success\": error ~> $exists() ? false : true\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 580,
  "y": 1040,
  "wires": [],
  "_order": 83
}

module.exports = Node;