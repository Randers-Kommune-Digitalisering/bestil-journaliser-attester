const Node = {
  "id": "074b5c36544f29c4",
  "type": "debug",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Sending mail",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"to\": to,\t    \"topic\": topic,\t    \"hasAttachment\": attachments ~> $exists()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 680,
  "y": 60,
  "wires": []
}

module.exports = Node;