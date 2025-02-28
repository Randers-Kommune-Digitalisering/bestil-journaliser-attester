const Node = {
  "id": "a6e6bb436e89720d",
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
  "x": 1750,
  "y": 1240,
  "wires": []
}

module.exports = Node;