const Node = {
  "id": "0bd5073885901481",
  "type": "debug",
  "z": "43d6b9b519cc6615",
  "name": "New roles",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"rolesInserted\": payload.affectedRows,\t    \"message\": payload.message,\t    \"success\": error ~> $exists() ? false : true\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1030,
  "y": 420,
  "wires": []
}

module.exports = Node;