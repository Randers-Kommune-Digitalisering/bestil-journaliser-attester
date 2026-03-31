const Node = {
  "id": "431fd25d5d57659c",
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
  "x": 2150,
  "y": 820,
  "wires": []
}

module.exports = Node;