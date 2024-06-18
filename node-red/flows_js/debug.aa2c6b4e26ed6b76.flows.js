const Node = {
  "id": "aa2c6b4e26ed6b76",
  "type": "debug",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
  "name": "Aktive sager?",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sager\": payload @ $sag .  {\t        \"id\": $sag.Id,\t        \"titel\": $sag.SagsTitel,\t        \"status\": $sag.SagsStatus.Navn\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 680,
  "y": 480,
  "wires": []
}

module.exports = Node;