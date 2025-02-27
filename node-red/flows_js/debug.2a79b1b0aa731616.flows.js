const Node = {
  "id": "2a79b1b0aa731616",
  "type": "debug",
  "z": "7599a14e87e1d5c4",
  "g": "5e3a8b5e70753001",
  "name": "stdout (db)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"message\": payload.warningCount > 0 ? \"Advarsel ved opdatering af bestillings adviseringsstatus\" : \"Bestilling opdateret adviseringsstatus\",\t    \"success\": error ~> $exists() ? false : true,\t    \"affectedRows\": payload.affectedRows,\t    \"error\": error.message,\t    \"bestilling\": rekvisition\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 970,
  "y": 1520,
  "wires": []
}

module.exports = Node;