const Node = {
  "id": "8c34e618014b2972",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Aktive sager?",
  "active": false,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "{\t    \"sager\": payload @ $sag .  {\t        \"id\": $sag.Id,\t        \"titel\": $sag.SagsTitel,\t        \"status\": $sag.SagsStatus.Navn\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 580,
  "y": 1840,
  "wires": []
}

module.exports = Node;