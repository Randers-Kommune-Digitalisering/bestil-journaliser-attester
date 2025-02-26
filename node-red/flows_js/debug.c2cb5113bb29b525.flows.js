const Node = {
  "id": "c2cb5113bb29b525",
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
  "x": 1130,
  "y": 660,
  "wires": []
}

module.exports = Node;