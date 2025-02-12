const Node = {
  "id": "45a7f0406a6a014a",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "{\t    \"bestillinger\": payload.warningCount > 0 ? \"Advarsel ved indsættelse af bestilling\" : \"Bestilling indsat i tabel\",\t    \"success\": error ~> $exists() ? false : true,\t    \"error\": error.message,\t    \"bestilling\": bestilling\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 750,
  "y": 1720,
  "wires": []
}

module.exports = Node;