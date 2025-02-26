const Node = {
  "id": "6c3e8a9cc8c7fb81",
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
  "x": 1590,
  "y": 1240,
  "wires": []
}

module.exports = Node;