const Node = {
  "id": "b8926a0fe507d19a",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Ny mail",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"from\": from,\t    \"topic\": topic,\t    \"body\": payload,\t    \"hasAttachment\": attachments[0].content ~> $exists()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 340,
  "y": 200,
  "wires": []
}

module.exports = Node;