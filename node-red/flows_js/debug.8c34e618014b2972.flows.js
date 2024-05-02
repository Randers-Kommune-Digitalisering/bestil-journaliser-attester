const Node = {
  "id": "8c34e618014b2972",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Aktive sager?",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sager\": payload @ $sag .  {\t        \"id\": $sag.Id,\t        \"titel\": $sag.SagsTitel,\t        \"status\": $sag.SagsStatus.Navn\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 560,
  "y": 1700,
  "wires": []
}

module.exports = Node;