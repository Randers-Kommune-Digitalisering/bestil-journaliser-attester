const Node = {
  "id": "5665e03fcac1b028",
  "type": "debug",
  "z": "7599a14e87e1d5c4",
  "name": "Mail out",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"to\": mail.to,\t    \"title\": mail.title,\t    \"hasAttachment\": mail.attachments != null and mail.attachments != [],\t    \"success\": payload.success,\t    \"error\": error\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1030,
  "y": 320,
  "wires": []
}

module.exports = Node;