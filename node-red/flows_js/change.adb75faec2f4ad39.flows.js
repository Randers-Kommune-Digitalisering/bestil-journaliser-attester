const Node = {
  "id": "adb75faec2f4ad39",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & token.access_token,\t    \"content-type\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1120,
  "wires": [
    []
  ],
  "_order": 37
}

module.exports = Node;