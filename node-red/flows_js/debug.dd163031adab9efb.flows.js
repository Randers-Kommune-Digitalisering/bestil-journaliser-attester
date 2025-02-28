const Node = {
  "id": "dd163031adab9efb",
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
  "x": 1170,
  "y": 640,
  "wires": []
}

module.exports = Node;