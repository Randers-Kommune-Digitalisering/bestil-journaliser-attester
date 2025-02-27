const Node = {
  "id": "304b5cf4a40e3fcd",
  "type": "debug",
  "z": "7599a14e87e1d5c4",
  "name": "Mail out",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"to\": mail.to,\t    \"title\": mail.title,\t    \"success\": payload.success\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 970,
  "y": 320,
  "wires": []
}

module.exports = Node;