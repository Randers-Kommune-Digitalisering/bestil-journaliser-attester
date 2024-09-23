const Node = {
  "id": "b8926a0fe507d19a",
  "type": "debug",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Mail in",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"from\": from,\t    \"topic\": topic,\t    \"hasAttachment\": attachments[0].content ~> $exists()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 140,
  "y": 340,
  "wires": []
}

module.exports = Node;