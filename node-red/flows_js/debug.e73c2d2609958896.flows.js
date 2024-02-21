const Node = {
  "id": "e73c2d2609958896",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "name": "Sager?",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"sager\": payload.Results @ $sag .  {\t        \"id\": $sag.Id,\t        \"titel\": $sag.SagsTitel,\t        \"status\": $sag.SagsStatus.Navn\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1080,
  "y": 1500,
  "wires": []
}

module.exports = Node;